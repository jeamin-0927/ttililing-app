import { ReactNode } from "react";
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export type props = TouchableOpacityProps & {
	children?: ReactNode;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<ViewStyle>;
	text?: string;
};
