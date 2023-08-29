import { props as AlertModalProps } from "@/components/Modals/AlertModal/types";
import { props as ConfirmModalProps } from "@/components/Modals/ConfirmModal/types";

export type StackParamList = {
	Home: undefined;
	Login: undefined;
	Alert: AlertModalProps;
	Confirm: ConfirmModalProps;
};

export type StackString = keyof StackParamList;
