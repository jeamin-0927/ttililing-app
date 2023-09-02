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
    justifyContent: "space-between",
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
  prev: {
    width: 80,
  },
  edit: {
    color: colors.gray400,
    fontFamily: fonts(600),
    fontSize: 14,
    textAlign: "right",
    width: 80
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 48,
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 18,
  },
  profileText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: colors.gray100,
    borderWidth: 1,
    backgroundColor: colors.gray100,
  },
  nickname: {
    color: colors.gray900,
    fontFamily: fonts(700),
    fontSize: 20,
    fontStyle: "normal",
  },
  calling: {
    color: colors.gray500,
    fontFamily: fonts(600),
    fontSize: 16,
    fontStyle: "normal",
  },
  userInfo: {
    display: "flex",
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 22,
  },
  userInfoItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    gap: 16,
  },
  userInfoItemTitle: {
    color: colors.gray700,
    fontFamily: fonts(600),
    fontSize: 18,
    fontStyle: "normal",
  },
  userInfoItemContent: {
    color: colors.gray900,
    fontFamily: fonts(700),
    fontSize: 18,
    fontStyle: "normal",
  }
});

export default styles;