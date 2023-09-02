import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Kakao from "@react-native-seoul/kakao-login";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { useSetRecoilState } from "recoil";

import Icon_Foward from "@/assets/icons/foward.svg";
import Icon_Logout from "@/assets/icons/logout.svg";
import Icon_Myinfo from "@/assets/icons/myinfo.svg";
import Icon_Settings from "@/assets/icons/settings.svg";
import Icon_Support from "@/assets/icons/support.svg";
import Menu from "@/components/Menu";
import Text from "@/components/Text";
import { tokenAtom } from "@/utils/states";

import { StackParamList as ParentsStackParamList } from "../types";

import styles from "./styles";

type props = NativeStackScreenProps<ParentsStackParamList, "Main">;
const Main = ({ navigation }: props) => {
  const setTokens = useSetRecoilState(tokenAtom);

  const Logout = async () => {
    navigation.navigate("Confirm", {
      title: "로그아웃 하시겠습니까?",
      context: "다시 로그인을 해야합니다.",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
      onConfirm: async () => {
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("refreshToken");
        setTokens({ accessToken: null, refreshToken: null });
        await Kakao.logout();
      }
    });
  };

  const menus = [
    {
      type: "btn",
      name: "내 정보",
      icon: <Icon_Myinfo />,
      onPress: () => navigation.navigate("Mypage")
    },
    {
      type: "btn",
      name: "띠리링 설정",
      icon: <Icon_Settings />,
      onPress: () => navigation.navigate("Alert", {
        title: "개발 예정입니다!",
        context: "빨리 개발을 완료하여 여러분들께 보여드리도록 하겠습니다!",
        buttonText: "확인",
      })
    },
    {
      type: "btn",
      name: "띠리링 어플리케이션 정보",
      icon: <Icon_Support />,
      onPress: () => navigation.navigate("Appinfo")
    },
    {
      type: "line",
    },
    {
      type: "btn",
      name: "로그아웃",
      icon: <Icon_Logout />,
      onPress: Logout
    },
  ];

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.title}>
        <Text style={styles.titleText}>전체</Text>
      </View>

      {
        menus.map((menu, index) => {
          if(menu.type === "btn") return (
            <TouchableOpacity
              style={styles.item}
              hitSlop={{ top: 12, bottom: 12, left: 10, right: 10 }}
              onPress={menu?.onPress}
              key={index}
            >
              <View style={styles.itemLeft}>
                <View style={styles.itemIcon}>
                  {menu?.icon}
                </View>
                <Text style={styles.itemText}>{menu?.name}</Text>
              </View>
              <Icon_Foward />
            </TouchableOpacity>
          );
          else if(menu.type === "line") return (
            <View style={styles.line} key={index} />
          );
        })
      }

      <Menu navigation={navigation} now="All" />
    </SafeAreaView>
  );
};

export default Main;
