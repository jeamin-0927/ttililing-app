import MaskedView from "@react-native-masked-view/masked-view";
import React from "react";
import { Animated, View } from "react-native";
import { Path, Svg } from "react-native-svg";

import Icon_Loading from "@/assets/icons/loading.svg";
import Icon_LoadingNoFill from "@/assets/icons/loading_nofill.svg";

import Text from "../Text";

import styles from "./styles";

const LoadingSpinner = ({ show }: {
  show: boolean;
}) => {
  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const anim = setInterval(() => {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 85,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animation, {
          toValue: 85,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        })
      ]).start();
    }, 1700);
    return () => clearInterval(anim);
  }, []);

  return show ? (
    <View style={styles.loadingSpinner}>
      <View style={styles.nofill}>
        <Icon_LoadingNoFill width={85} height={85} />
        <Text style={styles.nofillText}>로딩 중...</Text>
      </View>
      <View style={styles.loadingSpinnerMaskedViewParents}>
        <Animated.View style={{
          ...styles.loadingSpinnerMaskedView,
          height: animation
        }}>
          <Icon_Loading width={85} height={85} />
        </Animated.View>
      </View>
    </View>
  ) : null;
};

export default LoadingSpinner;