import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text } from "react-native";

import { StackParamList as ParentsStackParamList } from "../types";

type props = NativeStackScreenProps<ParentsStackParamList, "Main">;
const Main = ({ navigation }: props) => {
  return (
    <SafeAreaView>
      <Text>Login/Main/index.tsx</Text>
    </SafeAreaView>
  );
};

export default Main;
