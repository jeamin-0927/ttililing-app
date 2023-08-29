import { ReactNode } from "react";
import { SwippableModalRefType } from "react-native-swippable-modal";

export type props = {
	title: string;
	children?: ReactNode;
	modalRef: React.RefObject<SwippableModalRefType>;
};
