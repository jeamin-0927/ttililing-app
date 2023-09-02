import React from "react";
import { View } from "react-native";
import { useRecoilValue } from "recoil";

import Text from "@/components/Text";
import { CallingRecordLastOtherSelector } from "@/utils/states";

import styles from "./styles";


const Help = () => {
  const lastOther = useRecoilValue(CallingRecordLastOtherSelector);
  return (
    <View style={styles.help}>
      <Text style={styles.helpText}>이렇게 말해보세요!</Text>
      <Text style={styles.text}>{lastOther.recommend || "로딩 중..."}</Text>
    </View>
  );
};

export default Help;