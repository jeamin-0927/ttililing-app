
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RecoilRoot } from "recoil";

import colors from "@/utils/colors";

import Home from "./Home";
import Login from "./Login";
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
  return (
    <RecoilRoot>
      <NavigationContainer theme={rootTheme}>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            animation: "fade",
            animationDuration: 200,
          }}
        >
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
