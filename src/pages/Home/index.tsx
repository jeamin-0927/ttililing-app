import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { StackParamList as ParentsStackParamList } from "../types";

import Main from "./Main";
import { StackParamList } from "./types";

type props = NativeStackScreenProps<ParentsStackParamList, "Home">;
const Stack = createNativeStackNavigator<StackParamList>();

const Home = ({ navigation }: props) => {
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

      </Stack.Group>
      <Stack.Group screenOptions={{
        headerShown: false,
        animation: "fade",
        animationDuration: 100,
      }}>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Home;