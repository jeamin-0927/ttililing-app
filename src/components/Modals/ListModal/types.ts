import { SwippableModalRefType } from "react-native-swippable-modal";

export type props = {
	title: string;
	list: string[];
	selectState: [
		selected: number,
		setSelected: React.Dispatch<React.SetStateAction<number>>
	];
	modalRef: React.RefObject<SwippableModalRefType>;
}