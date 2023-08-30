import { StyleSheet } from "react-native";

import colors from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  chat: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  white: {
    display: "flex",
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
    gap: 8,
    borderRadius: 20,
    borderColor: colors.gray400,
  },
  text: {
    fontFamily: fonts(500),
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
  },
});

export default styles;