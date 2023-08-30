import React from "react";
import { View } from "react-native";

import Text from "@/components/Text";
import colors from "@/utils/colors";

import styles from "./styles";

const Chat = ({ 
  type,
  children,
  border,
}: {
  type: "me" | "other";
  children: string | string[];
  border?: boolean;
}) => {
  return (
    <View style={{
      ...styles.chat,
      alignItems: type === "me" ? "flex-end" : "flex-start",
    }}>
      <View style={{
        ...styles.white,
        backgroundColor: type === "me" ? colors.gray900 : colors.gray000,
        alignItems: type === "me" ? "flex-end" : "flex-start",
        borderBottomLeftRadius: type === "me" ? 20 : 0,
        borderBottomRightRadius: type === "me" ? 0 : 20,
        borderWidth: border ? 1 : 0,
      }}>
        <Text style={{
          ...styles.text,
          textAlign: type === "me" ? "right" : "left",
          color: type === "me" ? colors.gray000 : colors.gray900,
        }}>{children}</Text>
      </View>
    </View>
  );
};

export const ChatTextStyle = styles.text;
export default React.memo(Chat);