import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { StackParamList as ParentsStackParamList } from "../types";
import { StackParamList } from "./types";

import { View } from "react-native";
import Main from "./Main";

type props = NativeStackScreenProps<ParentsStackParamList, "Login">;
const Stack = createNativeStackNavigator<StackParamList>();

const Login = ({ navigation }: props) => {
  return (
    <View style={{
      width: "100%",
      height: "100%",
    }}>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          animationDuration: 100,
        }}>
        <Stack.Group>
          <Stack.Screen name="Main" component={Main} />

        </Stack.Group>
        <Stack.Group screenOptions={{
          headerShown: false,
          animation: "fade",
          animationDuration: 100,
        }}>
        </Stack.Group>
      </Stack.Navigator>
    </View>
  );
};

export default Login;