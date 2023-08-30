import { StyleSheet } from "react-native";

import colors from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  SafeAreaView: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray000,
    display: "flex",
    paddingBottom: 36,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  },
  top: {
    display: "flex",
    padding: 24,
    alignItems: "center",
    alignSelf: "stretch",
    gap: 16,
    flexDirection: "row",
    borderBottomColor: colors.gray300,
    borderBottomWidth: 1,
  },
  title: {
    color: colors.gray900,
    fontFamily: fonts(700),
    fontSize: 20,
    fontStyle: "normal",
  },
  logoIcon: {
    width: 150,
    height: 150,
    borderRadius: 40,
    overflow: "hidden",
  },
  logo: {
    display: "flex",
    paddingHorizontal: 24,
    gap: 16,
  },
  bottom: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 24,
    width: "100%",
    gap: 8,
  },
  version: {
    fontSize: 14,
    color: colors.gray500,
    fontFamily: fonts(400),
  },
  ttililing: {
    fontSize: 22,
    textAlign: "center",
    color: colors.gray500,
    fontFamily: fonts(600),
  },
  openSource: {
    fontSize: 14,
    color: colors.gray500,
    fontFamily: fonts(600),
    fontStyle: "normal",
    textDecorationLine: "underline",
    textDecorationColor: colors.gray500,
    textDecorationStyle: "solid",
  }
});

export default styles;