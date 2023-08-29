import { StyleSheet } from "react-native";

import colors, { opacity } from "@/utils/colors";
import fonts from "@/utils/fonts";

export default StyleSheet.create({
  modal: {
    backgroundColor: opacity(colors.gray900, 0.25),
  },
  container: {
    backgroundColor: opacity(colors.gray000, 1),
    marginHorizontal: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    width: "100%",
  },
  innerContainer: {
    height: "100%",
    marginTop: 0,
  },
  line: {
    backgroundColor: opacity(colors.gray900, 0.1),
    height: 4,
    width: 48,
    marginTop: 8,
  },
  title: {
    color: colors.gray900,
    fontSize: 20,
    fontStyle: "normal",
    fontFamily: fonts(700),
  },
  titleView: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 0,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});