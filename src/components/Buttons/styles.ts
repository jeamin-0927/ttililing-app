import { StyleSheet } from "react-native";

import colors, { opacity } from "@/utils/colors";
import fonts from "@/utils/fonts";

export default StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 18,
    fontStyle: "normal",
    fontFamily: fonts(600),
  },
  confirm: {
    backgroundColor: opacity(colors.gray900, 0.8),
  },
  confirmText: {
    color: colors.gray000,
  },
  cancel: {
    backgroundColor: opacity(colors.gray900, 0.1),
  },
  cancelText: {
    color: opacity(colors.gray900, 0.6),
  },
  searchBox: {
    backgroundColor: opacity(colors.gray900, 0.1),
  },
  searchBoxText: {
    color: colors.gray900,
    fontSize: 15,
    fontStyle: "normal",
    fontFamily: fonts(600),
    width: "100%",
  }
});