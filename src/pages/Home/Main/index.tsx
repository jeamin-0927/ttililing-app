import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { useSetRecoilState } from "recoil";

import Icon_Check from "@/assets/icons/check.svg";
import Icon_Close from "@/assets/icons/close.svg";
import Menu from "@/components/Menu";
import Text from "@/components/Text";
import Dialogue from "@/utils/api/dialogue";
import colors from "@/utils/colors";
import { tokenAtom } from "@/utils/states";

import { StackParamList as ParentsStackParamList } from "../types";

import styles from "./styles";



const Icons = ({ type }: {
  type: "green" | "red"
}) => (
  <View style={styles.circle}>
    <View style={{
      ...styles.circleInner,
      backgroundColor: type === "green" ? colors.green : colors.red
    }}>
      {type === "green" ? <Icon_Check /> : <Icon_Close />}
    </View>
  </View>
);

type props = NativeStackScreenProps<ParentsStackParamList, "Main">;
const Main = async ({ navigation }: props) => {
  const setTokens = useSetRecoilState(tokenAtom);

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

  const api = new Dialogue;
  api.setSubject("중화요리식당에서 주문하는 상황");

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Text style={styles.iconText}>📞</Text>
          <View style={styles.topNames}>
            <Text style={styles.topName}>{"재민"}의 띠리링</Text>
            <Text style={styles.topNumber}>총 전화시간 {"19:00:21"}</Text>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.profileImage}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={() => navigation.navigate("All")}
        >
        </TouchableOpacity>
      </View>

      <View style={styles.calling}>
        <View style={styles.callingTop}>
          <Text style={styles.mission}>하루 10분 통화하기</Text>
          <Text style={styles.success}>2일 연속 성공했어요! 🎉</Text>
          <TouchableOpacity 
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={() => {
              navigation.navigate("Call");
            }}
          >
            <Text style={styles.todayToo}>오늘도 도전하기 {">"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.callingBottom}>
          <View style={styles.line}></View>
          <View style={styles.dates}>
            <Icons type="red" />
            <Text style={styles.callingDate}>{"08/24 (목)"}</Text>
          </View>
          <View style={styles.dates}>
            <Icons type="green" />
            <Text style={styles.callingDate}>{"08/25 (금)"}</Text>
          </View>
          <View style={styles.dates}>
            <Icons type="green" />
            <Text style={styles.callingDate}>{"08/26 (토)"}</Text>
          </View>
          <View style={styles.dates}>
            <Icons type="green" />
            <Text style={styles.callingDate}>{"08/27 (일)"}</Text>
          </View>
        </View>
      </View>


      <View style={styles.now}>
        <Text style={styles.nowTitle}>🤙 지금까지 134,255초 통화했어요!</Text>
        <View style={styles.nowBottom}>
          <View style={styles.nowBottomTop}>
            <Text style={styles.nowBottomTopTitle}>전화 시간 변화 그래프</Text>
            <Text style={styles.nowBottomTopDate}>(8월 1일 ~ 8월 31일)</Text>
            <Text style={styles.topNumber}>{await api.answer("안녕하세여")}</Text>
          </View>
          <View style={styles.nowBottomBottom}></View>
        </View>
      </View>

      <Menu navigation={navigation} now="Home" />
    </SafeAreaView>
  );
};

export default Main;
