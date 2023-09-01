import { StyleSheet } from "react-native";

import colors from "@/utils/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 12,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    overflow: "hidden",
  },
  record: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    alignSelf: "stretch",
  },
  empty: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    textAlign: "center",
    color: colors.gray400,
    fontSize: 14,
  }
});

export default styles;