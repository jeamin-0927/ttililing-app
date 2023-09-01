import { StackParamList as ParentsStackParamList } from "../types";

export type StackParamList = ParentsStackParamList & {
	Main: undefined;

	Calling: undefined;
	Received: {
		topic: string;
	};
};

export type StackString = keyof StackParamList;
