import * as Kakao from "@react-native-seoul/kakao-login";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

import Icon_Foward from "@/assets/icons/foward.svg";
import Menu from "@/components/Menu";
import Text from "@/components/Text";

import { StackParamList as ParentsStackParamList } from "../types";

import styles from "./styles";

type props = NativeStackScreenProps<ParentsStackParamList, "Main">;
const Main = ({ navigation }: props) => {
  const menus = [
    {
      type: "title",
      name: "1단계",
    },
    {
      type: "btn",
      name: "짜장면 하나 주문하기",
      icon: "🍜",
      topic: "중국집에 짜장면 하나 주문하기",
    },
    {
      type: "btn",
      name: "띠리링 설정",
      icon: "🍜",
      topic: "",
    },
    {
      type: "btn",
      name: "띠리링 어플리케이션 정보",
      icon: "🍜",
      topic: "",
    },
    {
      type: "line",
    },
    {
      type: "title",
      name: "2단계",
    },
    {
      type: "btn",
      name: "로그아웃",
      icon: "🍜",
      topic: "",
    },
  ];

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.title}>
        <Text style={styles.titleText}>전화하기</Text>
      </View>

      {
        menus.map((menu, index) => {
          if(menu.type === "btn") return (
            <TouchableOpacity
              style={styles.item}
              hitSlop={{ top: 12, bottom: 12, left: 10, right: 10 }}
              onPress={() => {
                navigation.navigate("Received", {
                  topic: menu.topic as string,
                });
              }}
              key={index}
            >
              <View style={styles.itemLeft}>
                <View style={styles.itemIcon}>
                  <Text style={styles.iconText}>{menu?.icon}</Text>
                </View>
                <Text style={styles.itemText}>{menu?.name}</Text>
              </View>
              <Icon_Foward />
            </TouchableOpacity>
          );
          else if(menu.type === "line") return (
            <View style={styles.line} key={index} />
          );
          else if(menu.type === "title") return (
            <View style={styles.title} key={index}>
              <Text style={styles.littleTitleText}>{menu?.name}</Text>
            </View>
          );
        })
      }

      <Menu navigation={navigation} now="Call" />
    </SafeAreaView>
  );
};

export default Main;
