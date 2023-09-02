import React from "react";
import { Image, Platform, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRecoilState } from "recoil";

import colors from "@/utils/colors";
import { SizeAtom } from "@/utils/states";

import styles from "./styles";


const CallView = ({
  navigation,
  children
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
  children: React.ReactNode;
}) => {
  const [size, setSize] = useRecoilState(SizeAtom);

  navigation.addListener("beforeRemove", () => {
    if(Platform.OS === "ios") return;
    StatusBar.setBackgroundColor(colors.gray000);
    StatusBar.setBarStyle("dark-content");
  });
  navigation.addListener("focus", () => {
    if(Platform.OS === "ios") return;
    StatusBar.setBackgroundColor(colors.gray900);
    StatusBar.setBarStyle("light-content");
  });

  return (
    <View style={styles.callview} onLayout={(e) => {
      setSize(e.nativeEvent.layout);
    }}>
      <Image 
        source={require("@/assets/images/call_background.png")} 
        style={{ 
          ...styles.background,
          transform: [
            { translateY: size.height * 0.3 },
          ]
        }} 
      />
      <SafeAreaView style={{
        ...styles.SafeAreaView,
        height: size.height,
      }}>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default CallView;