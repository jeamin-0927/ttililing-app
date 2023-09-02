import { StyleSheet } from "react-native";

import colors, { opacity } from "@/utils/colors";
import fonts from "@/utils/fonts";

export default StyleSheet.create({
  background: {
    width: "200%",
    height: "100%",
    position: "absolute",
  },
  view: {
    display: "flex",
    padding: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
    alignSelf: "stretch",
    borderRadius: 16,
    backgroundColor: colors.gray000,
    width: "100%",
  },
  viewParents: {
    display: "flex",
    paddingHorizontal: 24,
    flexDirection: "column",
    alighItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: opacity(colors.gray900, 0.3),
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    alignSelf: "stretch",
  },
  title: {
    fontSize: 20,
    fontFamily: fonts(700),
    fontStyle: "normal",
    color: colors.gray900,
  },
  context: {
    fontSize: 18,
    fontFamily: fonts(400),
    fontStyle: "normal",
    color: opacity(colors.gray900, 0.9),
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 8,
    alignSelf: "stretch",
  },
  confirm: {
    color: colors.gray400,
    fontSize: 18,
    fontStyle: "normal",
    fontFamily: fonts(700),
  }
});