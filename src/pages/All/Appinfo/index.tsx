import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

import { version } from "@/../package.json";
import Icon_Logo from "@/assets/icons/logo.svg";
import Icon_Prev from "@/assets/icons/prev.svg";
import Text from "@/components/Text";

import { StackParamList as ParentsStackParamList } from "../types";


import styles from "./styles";


type props = NativeStackScreenProps<ParentsStackParamList, "Appinfo">;
const Appinfo = ({ navigation }: props) => {

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.top}>
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Icon_Prev />
        </TouchableOpacity>
        <Text style={styles.title}>띠리링 어플리케이션 정보</Text>
      </View>

      <View style={styles.logo}>
        <View style={styles.logoIcon}>
          <Icon_Logo width={150} height={150} />
        </View>
        <Text style={styles.ttililing}>띠리링</Text>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.version}>앱 버전 {version}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("OpenSource")}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.openSource}>오픈소스 라이센스</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Appinfo;
