import React from "react";
import { View } from "react-native";

import Text from "@/components/Text";

import styles from "./styles";


const Help = () => {
  return (
    <View style={styles.help}>
      <Text style={styles.helpText}>이렇게 말해보세요!</Text>
      <Text style={styles.text}>안녕하세요!{"\n"}짜장면 한 그릇 가능한가요?</Text>
    </View>
  );
};

export default Help;