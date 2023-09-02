import { StyleSheet } from "react-native";

import colors from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  help: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    alignSelf: "stretch",
  },
  helpText: {
    fontSize: 22,
    fontStyle: "normal",
    fontFamily: fonts(500),
    textAlign: "center",
    color: colors.gray400,
  },
  text: {
    textAlign: "center",
    fontFamily: fonts(600),
    fontSize: 24,
    fontStyle: "normal",
    lineHeight: 30,
    color: colors.gray000,
  }
});

export default styles;