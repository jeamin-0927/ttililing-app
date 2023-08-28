import { StyleSheet } from "react-native";

import colors, { opacity } from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray900
  },
  container: {
    width: "100%",
    height: "100%",
  },
  box: {
    width: "100%",
    transform: [{ translateY: 100 }],
  },
  title: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  },
  titleInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  titleContext: {
    color: colors.gray000,
    fontSize: 22,
    fontStyle: "normal",
    fontFamily: fonts(600),
  },
  titleText: {
    fontFamily: fonts(900),
    fontSize: 100,
  },
  bottom: {
    display: "flex",
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    position: "absolute",
    bottom: 48,
  },
  social: {
    color: opacity(colors.gray000, .75),
    textAlign: "center",
    fontSize: 12,
    fontStyle: "normal",
    fontFamily: fonts(600),
  },
  kakao: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 16,
    backgroundColor: "#FEE500",
  },
  kakaoText: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: fonts(600),
  },
  terms: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  touchableTerms: {
    marginLeft: 4,
  },
  termsText: {
    textDecorationLine: "underline",
  },
  figure: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "relative",
    bottom: 70,
    left: 100,
    zIndex: -1,
  },
  circle: {
    width: 289,
    height: 289,
    borderRadius: 289 / 2,
    position: "relative",
    right: 0,
  },
  lines: {
    position: "relative",
    top: 180,
    left: 80,
  }
});

export default styles;