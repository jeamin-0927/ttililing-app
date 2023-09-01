import { StyleSheet } from "react-native";

import colors from "@/utils/colors";

const styles = StyleSheet.create({
  box: {
    width: 260,
    height: 260,
    borderRadius: 260,
    backgroundColor: colors.gray900,
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },
  gradient: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "absolute",
    zIndex: -1,
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: 260,
  }
});

export default styles;