import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Kakao from "@react-native-seoul/kakao-login";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { useRecoilState, useSetRecoilState } from "recoil";

import Icon_Check from "@/assets/icons/check.svg";
import Icon_Close from "@/assets/icons/close.svg";
import Menu from "@/components/Menu";
import Text from "@/components/Text";
import colors from "@/utils/colors";
import { tokenAtom, userAtom } from "@/utils/states";

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
const Main = ({ navigation }: props) => {
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const setTokens = useSetRecoilState(tokenAtom);

  const init = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    const getKakaoAccessToken = await Kakao.getAccessToken();
    const newAccessToken = getKakaoAccessToken.accessToken;
    if(accessToken && accessToken !== newAccessToken) {
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.setItem("accessToken", newAccessToken);
    }
    const getKakaoProfile = await Kakao.getProfile();
    if(getKakaoProfile) {
      setUserInfo(getKakaoProfile);
    }
    setTokens({ accessToken: newAccessToken, refreshToken });
  };

  React.useEffect(() => {
    init();
  }, []);
  // navigation.addListener("focus", init);
  
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Text style={styles.iconText}>📞</Text>
          <View style={styles.topNames}>
            <Text style={styles.topName}>{userInfo.nickname}의 띠리링</Text>
            <Text style={styles.topNumber}>총 전화시간 {"19:00:21"}</Text>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.profileImage}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={() => navigation.navigate("All")}
        >
          <Image source={{ uri: userInfo.profileImageUrl }} style={styles.image} />
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
            <Text style={styles.topNumber}></Text>
          </View>
          <View style={styles.nowBottomBottom}></View>
        </View>
      </View>

      <Menu navigation={navigation} now="Home" />
    </SafeAreaView>
  );
};

export default Main;
