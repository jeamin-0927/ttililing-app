import { StyleSheet } from "react-native";

import colors from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  SafeAreaView: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scroll: {
    width: "100%",
    height: "100%",
  },
  top: {
    display: "flex",
    padding: 24,
    alignItems: "center",
    alignSelf: "stretch",
    gap: 16,
    flexDirection: "row",
  },
  title: {
    color: colors.gray900,
    fontFamily: fonts(700),
    fontSize: 20,
    fontStyle: "normal",
  },
  licences: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 4,
  },
  license: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "stretch",
    gap: 8,
    paddingBottom: 36,
  },
  licenseLicense: {
    fontSize: 14,
    color: colors.blue,
    fontFamily: fonts(700),
  },
  licenseName: {
    fontSize: 16,
    color: colors.gray900,
    fontFamily: fonts(600),
  },
  description: {
    fontSize: 14,
    color: colors.gray400,
    fontFamily: fonts(200),
  }
});

export default styles;