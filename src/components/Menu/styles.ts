import { StyleSheet } from "react-native";

import colors from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  menu: {
    backgroundColor: colors.gray000,
    display: "flex",
    paddingTop: 12,
    paddingBottom: 18,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    borderTopColor: colors.gray200,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
  },
  menuItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  menuItemText: {
    color: colors.gray400,
    fontFamily: fonts(700),
    fontSize: 12,
    fontStyle: "normal",
  },
  menuItemTextActive: {
    color: colors.gray900,
  },
});

export default styles;
