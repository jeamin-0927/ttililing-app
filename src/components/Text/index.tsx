import React from "react";
import { Text as ReactNativeText } from "react-native";

import styles from "./styles";

const Text = (
  props: React.ComponentProps<typeof ReactNativeText>
) => {
  return (
    <ReactNativeText {...props} style={[styles.text, props.style]} />
  );
};

export default Text;