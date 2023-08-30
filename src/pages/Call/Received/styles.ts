import { StyleSheet } from "react-native";

import colors, { opacity } from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  top: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    alignSelf: "stretch",
  },
  callStart: {
    color: colors.gray000,
    textAlign: "center",
    fontFamily: fonts(600),
    fontSize: 16,
    fontStyle: "normal",
  },
  callWho: {
    textAlign: "center",
    color: colors.gray000,
    fontFamily: fonts(700),
    fontSize: 36,
    fontStyle: "normal",
  },
  bottom: {
    display: "flex",
    paddingHorizontal: 36,
    paddingVertical: 48,
    flexDirection: "column",
    alignItems: "center",
    gap: 48,
    alignSelf: "stretch",
    borderRadius: 36,
    backgroundColor: opacity(colors.gray900, .85),
  },
  btns: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    width: "100%",
  },
  close: {
    display: "flex",
    width: 68,
    height: 68,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 68,
    backgroundColor: colors.red,
    transform: [{ rotateZ: "135deg" }],
  },
  endIcon: {},
  btnText: {
    color: colors.gray000,
    textAlign: "center",
    fontFamily: fonts(500),
    fontSize: 14,
    fontStyle: "normal",
  },
  btn: {
    width: 64,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  btnIcon: {}
});

export default styles;