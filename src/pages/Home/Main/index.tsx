import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useSetRecoilState } from "recoil";

import Text from "@/components/Text";
import { tokenAtom } from "@/utils/states";

import { StackParamList as ParentsStackParamList } from "../types";

type props = NativeStackScreenProps<ParentsStackParamList, "Main">;
const Main = ({ navigation }: props) => {
  const setTokens = useSetRecoilState(tokenAtom);

  const onPress = async () => {
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken");
    setTokens({ accessToken: null, refreshToken: null });
  };

  return (
    <SafeAreaView>
      <Text>Home/Main/index.tsx</Text>

      <TouchableOpacity onPress={onPress}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Main;
