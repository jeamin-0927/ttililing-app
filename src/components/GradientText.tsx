import MaskedView from "@react-native-masked-view/masked-view";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

import Text from "./Text";
    
const GradientText = (
  props: React.ComponentProps<typeof Text> & {
    colors: string[];
    start: { x: number; y: number };
    end: { x: number; y: number };
  }
) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient colors={props.colors} start={props.start} end={props.end}>
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;