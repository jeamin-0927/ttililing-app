import { StackParamList as ParentsStackParamList } from "../types";

export type StackParamList = ParentsStackParamList & {
	Main: undefined;

	Calling: undefined;
	Received: undefined;
};

export type StackString = keyof StackParamList;
