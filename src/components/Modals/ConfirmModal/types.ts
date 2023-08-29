import { TouchableOpacityProps } from "react-native";

export type props = TouchableOpacityProps & {
	title?: string;
	context?: string;
	confirmButtonText: string;
	cancelButtonText: string;
	onBeforeCancel?: () => void | Promise<void>;
	onCancel?: () => void | Promise<void>;
	onBeforeConfirm?: () => void | Promise<void>;
	onConfirm?: () => void | Promise<void>;
};
