import { StyleSheet } from "react-native";

import colors from "@/utils/colors";
import fonts from "@/utils/fonts";

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
  },
  top: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    alignSelf: "stretch",
  },
  callStart: {
    color: colors.gray000,
    textAlign: "center",
    fontFamily: fonts(600),
    fontSize: 16,
    fontStyle: "normal",
  },
  callWho: {
    textAlign: "center",
    color: colors.gray000,
    fontFamily: fonts(700),
    fontSize: 36,
    fontStyle: "normal",
  },
  showkeybord: {
    display: "flex",
    paddingHorizontal: 24,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 32,
    borderColor: colors.gray500,
    borderWidth: 1,
    backgroundColor: colors.gray800,
  },
  showkeybordText: {
    color: colors.gray000,
    textAlign: "center",
    fontFamily: fonts(600),
    fontSize: 16,
    fontStyle: "normal",
  },
  center: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    alignSelf: "stretch",
  },
  text: {
    color: colors.gray000,
    textAlign: "right",
  },
  startConversationParent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  startConversation: {
    display: "flex",
    paddingHorizontal: 22,
    paddingVertical: 12,
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    backgroundColor: colors.gray800,
    borderColor: colors.gray500,
    borderWidth: 1,
  },
  startConversationText: {
    color: colors.gray000,
    fontFamily: fonts(600),
    fontSize: 14,
    fontStyle: "normal",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  chat: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  white: {
    display: "flex",
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: colors.gray400,
    backgroundColor: colors.gray900,
    alignItems: "flex-end",
    borderBottomRightRadius: 0,
    borderWidth: 1,
  },
  texter: {
    fontFamily: fonts(500),
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
    textAlign: "right",
    color: colors.gray000,
  },
  textop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 4,
  },
  textInput: {
    padding: 0,
    color: colors.gray000,
    minWidth: 60,
    maxWidth: "85%",
    fontFamily: fonts(500),
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
    textAlign: "right",
  }
});

export default styles;