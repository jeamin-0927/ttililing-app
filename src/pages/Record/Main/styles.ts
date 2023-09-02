import { StyleSheet } from "react-native";

import colors from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  SafeAreaView: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray000,
    display: "flex",
    paddingVertical: 36,
    flexDirection: "column",
    alignItems: "center",
    gap: 24,
  },
  title: {
    display: "flex",
    paddingHorizontal: 24,
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleText: {
    color: colors.gray900,
    fontFamily: fonts(700),
    fontSize: 28,
    fontStyle: "normal",
  },
  norecord: {
    fontFamily: fonts(400),
    fontSize: 14,
    fontStyle: "normal",
    color: colors.gray400,
  }
});

export default styles;