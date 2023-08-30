import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { StackParamList as ParentsStackParamList } from "../types";

import Calling from "./Calling";
import Main from "./Main";
import Received from "./Received";
import { StackParamList } from "./types";

type props = NativeStackScreenProps<ParentsStackParamList, "Call">;
const Stack = createNativeStackNavigator<StackParamList>();

const Call = ({ navigation }: props) => {
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
        <Stack.Screen name="Calling" component={Calling} />
      </Stack.Group>
      <Stack.Group screenOptions={{
        headerShown: false,
        animation: "fade",
        animationDuration: 100,
      }}>
        <Stack.Screen name="Received" component={Received} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Call;