import { BlurView } from "@react-native-community/blur";
import MaskedView from "@react-native-masked-view/masked-view";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import KakaoIcon from "@/assets/icons/kakao.svg";
import Lines from "@/assets/images/line.svg";
import GradientText from "@/components/GradientText";
import Text from "@/components/Text";
import colors, { opacity } from "@/utils/colors";

import { StackParamList as ParentsStackParamList } from "../types";

import styles from "./styles";


const TtililingText = ({ show = true }: { show?: boolean; }) => (
  <GradientText 
    colors={[
      opacity(colors.gray000, .5),
      opacity(colors.gray000, .1)
    ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      ...styles.titleText,
      opacity: show ? 1 : 0
    }}
  >띠리링</GradientText>
);

type props = NativeStackScreenProps<ParentsStackParamList, "Main">;
const Main = ({ navigation }: props) => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>

        <View style={styles.box}>
          <View style={styles.title}>
            <View style={styles.titleInner}>
              <Text style={styles.titleContext}>전화 공포증 극복 플랫폼</Text>
              <MaskedView maskElement={<TtililingText />}>
                <BlurView overlayColor="transparent">
                  <TtililingText show={true}/>
                </BlurView>
              </MaskedView>
            </View>
          </View>

          <View style={styles.figure}>
            <Lines style={styles.lines} />
            <LinearGradient
              colors={[
                "#ACAAFE",
                "#99FFFA"
              ]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.circle}
            />
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity style={styles.kakao}>
            <KakaoIcon width={24} height={24} />
            <Text style={styles.kakaoText}>카카오로 시작하기</Text>
            <View style={{ width: 24 }} />
          </TouchableOpacity>
          <View style={styles.terms}>
            <Text style={styles.social}>소셜 로그인 시</Text>
            <TouchableOpacity style={styles.touchableTerms}>
              <Text style={[styles.social, styles.termsText]}>이용 약관</Text>
            </TouchableOpacity>
            <Text style={styles.social}>에 동의 한 것으로 간주됩니다.</Text>
          </View>
        </View>

      </SafeAreaView>
    </View>
  );
};

export default Main;
