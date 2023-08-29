import { TouchableOpacityProps } from "react-native";

export type props = TouchableOpacityProps & {
	title?: string;
	buttonText: string;
	context?: string;
	onBeforeClose?: () => void | Promise<void>;
	onClose?: () => void | Promise<void>;
};
