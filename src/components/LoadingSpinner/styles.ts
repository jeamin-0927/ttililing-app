import { StyleSheet } from "react-native";

import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  loadingSpinner: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 9999999,
  },
  loadingSpinnerMaskedViewParents: {
    width: "100%",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    transform: [{ translateY: -22 }],
  },
  loadingSpinnerMaskedView: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    zIndex: 9999999,
    overflow: "hidden",
    gap: 6,
  },
  nofill: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 9999999,
    overflow: "hidden",
    gap: 12,
  },
  nofillText: {
    fontSize: 16,
    fontFamily: fonts(700),
    fontStyle: "normal",
  }
});

export default styles;