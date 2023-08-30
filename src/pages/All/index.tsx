import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { StackParamList as ParentsStackParamList } from "../types";

import Appinfo from "./Appinfo";
import Main from "./Main";
import OpenSource from "./OpenSource";
import { StackParamList } from "./types";

type props = NativeStackScreenProps<ParentsStackParamList, "All">;
const Stack = createNativeStackNavigator<StackParamList>();

const All = ({ navigation }: props) => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        animationDuration: 100,
      }}>
      <Stack.Group>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Appinfo" component={Appinfo} />
      </Stack.Group>
      <Stack.Group screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        animationDuration: 100,
      }}>
        <Stack.Screen name="OpenSource" component={OpenSource} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default All;