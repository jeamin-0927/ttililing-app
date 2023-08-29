import { StackParamList as ParentsStackParamList } from "../types";

export type StackParamList = ParentsStackParamList & {
	Main: undefined;
};

export type StackString = keyof StackParamList;
