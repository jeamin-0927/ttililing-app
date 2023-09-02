import { StackParamList as ParentsStackParamList } from "../types";

export type StackParamList = ParentsStackParamList & {
	Main: undefined;
	Appinfo: undefined;
	OpenSource: undefined;
	Mypage: undefined;
};

export type StackString = keyof StackParamList;
