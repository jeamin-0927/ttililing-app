import { StyleSheet } from "react-native";

import colors from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  SafeAreaView: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray000,
    display: "flex",
    paddingVertical: 36,
    flexDirection: "column",
    alignItems: "center",
    gap: 24,
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
  },
  title: {
    display: "flex",
    paddingHorizontal: 24,
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleText: {
    color: colors.gray900,
    fontFamily: fonts(700),
    fontSize: 28,
    fontStyle: "normal",
  },
  item: {
    display: "flex",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    gap: 16,
  },
  itemLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    flexDirection: "row",
  },
  itemIcon: {
    display: "flex",
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.gray200,
  },
  itemText: {
    fontFamily: fonts(600),
    color: colors.gray800,
    fontSize: 20,
    fontStyle: "normal",
  },
  line: {
    width: "100%",
    marginLeft: 24,
    height: 2,
    alignSelf: "stretch",
    backgroundColor: colors.gray200,
  },
  iconText: {
    fontFamily: fonts(600),
    fontSize: 20,
    fontStyle: "normal",
  },
  littleTitleText: {
    color: colors.gray900,
    fontFamily: fonts(700),
    fontSize: 24,
    fontStyle: "normal",
  },
  titleBottom: {
    display: "flex",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    width: "100%",
    gap: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  unselected: {
    display: "flex",
    paddingHorizontal: 28,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderRadius: 32,
    borderWidth: 1,
  },
  text: {
    fontFamily: fonts(700),
    fontSize: 16,
    fontStyle: "normal",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  scrollView2: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 24,
    paddingBottom: 150,
  },
  scrollHorizontal: {
    width: "100%",
    height: 52,
  }
});

export default styles;