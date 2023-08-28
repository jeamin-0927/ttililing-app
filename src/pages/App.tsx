import React from "react";
import { RecoilRoot } from "recoil";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "@/utils/colors";

import { StackParamList } from "./types";

import Home from "./Home";
import Login from "./Login";

const Stack = createNativeStackNavigator<StackParamList>();

export const rootTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
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
