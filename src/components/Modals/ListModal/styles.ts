import { StyleSheet } from "react-native";

import colors, { opacity } from "@/utils/colors";
import fonts from "@/utils/fonts";

export default StyleSheet.create({
  text: {
    color: colors.gray900,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    width: "100%",
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "stretch",
    width: "100%",
    paddingVertical: 12,
  },
  listItemText: {
    color: colors.gray900,
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: fonts(400),
  }
});