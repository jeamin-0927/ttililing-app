import { StyleSheet } from "react-native";

import colors from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  SafeAreaView: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray000,
    display: "flex",
    paddingBottom: 36,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 24,
  },
  top: {
    display: "flex",
    padding: 24,
    alignItems: "center",
    alignSelf: "stretch",
    gap: 16,
    flexDirection: "row",
    borderBottomColor: colors.gray300,
    borderBottomWidth: 1,
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
    gap: 28,
  },
  license: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "stretch",
    gap: 8,
  },
  licenseLicense: {
    fontSize: 16,
    color: colors.blue,
    fontFamily: fonts(400),
  },
  licenseName: {
    fontSize: 16,
    color: colors.gray900,
    fontFamily: fonts(600),
  },
  description: {
    fontSize: 14,
    color: colors.gray400,
    fontFamily: fonts(400),
  }
});

export default styles;