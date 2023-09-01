import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useSetRecoilState } from "recoil";

import Menu from "@/components/Menu";
import Text from "@/components/Text";
import Dialogue from "@/utils/api/dialogue";
import { tokenAtom } from "@/utils/states";

import { StackParamList as ParentsStackParamList } from "../types";

import styles from "./styles";

type props = NativeStackScreenProps<ParentsStackParamList, "Main">;
const Main = ({ navigation }: props) => {
  const setTokens = useSetRecoilState(tokenAtom);

  React.useEffect(() => {
    (async () => {
      const dialog = new Dialogue();
      dialog.setSubject("짜장면 주문하기");
      const data = await dialog.answer("짜장면 주문하고 싶어요.");
      console.log(data);
    })();
  }, []);

  const onPress = async () => {
    navigation.navigate("Confirm", {
      title: "로그아웃 하시겠습니까?",
      context: "로그아웃 시, 저장된 토큰이 삭제됩니다.",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
      onConfirm: async () => {
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("refreshToken");
        setTokens({ accessToken: null, refreshToken: null });
      }
    });
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text>Record/Main/index.tsx</Text>

      <TouchableOpacity onPress={onPress}>
        <Text>Go to Login</Text>
      </TouchableOpacity>

      <Menu navigation={navigation} now="Record" />
    </SafeAreaView>
  );
};

export default Main;
