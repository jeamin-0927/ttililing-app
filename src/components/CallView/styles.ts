import { StyleSheet } from "react-native";

import colors from "@/utils/colors";

const styles = StyleSheet.create({
  callview: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray900,
  },
  SafeAreaView: {
    width: "100%",
    display: "flex",
    paddingHorizontal: 24,
    paddingVertical: 32,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
    gap: 30,
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default styles;