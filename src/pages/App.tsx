
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Kakao from "@react-native-seoul/kakao-login";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StatusBar } from "react-native";
import BootSplash from "react-native-bootsplash";
import { useRecoilValue, useSetRecoilState } from "recoil";

import "react-native-reanimated";
import { AlertModal, ConfirmModal } from "@/components/Modals";
import colors from "@/utils/colors";
import { isLoginSelector, tokenAtom, userAtom } from "@/utils/states";

import All from "./All";
import Call from "./Call";
import Home from "./Home";
import Login from "./Login";
import Record from "./Record";
import { StackParamList } from "./types";


const Stack = createNativeStackNavigator<StackParamList>();

export const rootTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.gray000,
  }
};

const App = () => {
  const setTokens = useSetRecoilState(tokenAtom);
  const isLogin = useRecoilValue(isLoginSelector);

  React.useEffect(() => {
    if(Platform.OS !== "android") return;
    if(isLogin) {
      StatusBar.setBackgroundColor(colors.gray000);
      StatusBar.setBarStyle("dark-content");
    }
    else {
      StatusBar.setBackgroundColor(colors.gray900);
      StatusBar.setBarStyle("light-content");
    }
  }, [isLogin]);

  const setUserInfo = useSetRecoilState(userAtom);
  const init = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    const getKakaoAccessToken = await Kakao.getAccessToken();
    const newAccessToken = getKakaoAccessToken.accessToken;
    if(accessToken && accessToken !== newAccessToken) {
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.setItem("accessToken", newAccessToken);
    }
    const getKakaoProfile = await Kakao.getProfile();
    if(getKakaoProfile) {
      setUserInfo(getKakaoProfile);
    }
    setTokens({ accessToken: newAccessToken, refreshToken });
  };

  

  React.useEffect(() => {
    init();
    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <NavigationContainer theme={rootTheme}>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          animation: "fade",
          animationDuration: 100,
        }}
      >
        <Stack.Group>
          {
            isLogin ? (
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Call" component={Call} />
                <Stack.Screen name="Record" component={Record} />
                <Stack.Screen name="All" component={All} />
              </>
            ) : (
              <Stack.Screen name="Login" component={Login} />
            )
          }
        </Stack.Group>
        <Stack.Group screenOptions={{ 
          presentation: "transparentModal",
          animation: "fade",
          animationDuration: 100,
          contentStyle: { backgroundColor: "transparent" },
        }}>
          <Stack.Screen name="Alert" component={AlertModal} />
          <Stack.Screen name="Confirm" component={ConfirmModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
