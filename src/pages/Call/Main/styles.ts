import { StyleSheet } from "react-native";

import colors from "@/utils/colors";

const styles = StyleSheet.create({
  SafeAreaView: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray000
  },
  new: {
    backgroundColor: colors.gray900,
    width: 52,
    height: 52,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,

    position: "absolute",
    bottom: 104,
    right: 24,
  }
});

export default styles;