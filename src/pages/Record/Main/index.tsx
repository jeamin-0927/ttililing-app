import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, View } from "react-native";

import Menu from "@/components/Menu";
import Text from "@/components/Text";

import { StackParamList as ParentsStackParamList } from "../types";

import styles from "./styles";

type props = NativeStackScreenProps<ParentsStackParamList, "Main">;
const Main = ({ navigation }: props) => {
  

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.title}>
        <Text style={styles.titleText}>기록</Text>
      </View>
      <Text style={styles.norecord}>기록이 없습니다. (구현 예정)</Text>
      <Menu navigation={navigation} now="Record" />
    </SafeAreaView>
  );
};

export default Main;
