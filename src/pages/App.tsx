
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BootSplash from "react-native-bootsplash";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { AlertModal, ConfirmModal } from "@/components/Modals";
import colors from "@/utils/colors";
import { isLoginSelector, tokenAtom } from "@/utils/states";

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
    const init = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      setTokens({ accessToken, refreshToken });
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
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
