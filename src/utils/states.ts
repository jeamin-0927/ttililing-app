import { Animated } from "react-native";
import { DefaultValue, atom, selector } from "recoil";

import colors from "./colors";

export const tokenAtom = atom<{
  accessToken: string | null;
  refreshToken: string | null;
}>({
  key: "token",
  default: {
    accessToken: null,
    refreshToken: null
  }
});

export const isLoginSelector = selector({
  key: "isLogin",
  get: ({ get }) => {
    const { accessToken, refreshToken } = get(tokenAtom);
    return !!accessToken && !!refreshToken;
  }
});

export const SizeAtom = atom({
  key: "size",
  default: {
    width: 0,
    height: 0
  }
});

type CallingRecord = {
  type: "me" | "other";
  text: string;
};
export const CallingAtom = atom({
  key: "calling",
  default: {
    color: colors.gray500,
    recording: false,
    record: [] as CallingRecord[],
  }
});

export const CallingColorSelector = selector<string>({
  key: "CallingColorSelector",
  get: ({ get }) => {
    const { color } = get(CallingAtom);
    return color;
  },
  set: ({ set }, color: string | DefaultValue) => {
    set(CallingAtom, (prev) => ({
      ...prev,
      color: color instanceof DefaultValue ? colors.gray500 : color
    }));
  },
});

export const CallingRecordingSelector = selector<boolean>({
  key: "CallingRecordingSelector",
  get: ({ get }) => {
    const { recording } = get(CallingAtom);
    return recording;
  },
  set: ({ set }, recording: boolean | DefaultValue) => {
    set(CallingAtom, (prev) => ({
      ...prev,
      recording: recording instanceof DefaultValue ? false : recording
    }));
  }
});

export const CallingRecordSelector = selector<CallingRecord[]>({
  key: "CallingRecordSelector",
  get: ({ get }) => {
    const { record } = get(CallingAtom);
    return record;
  },
  set: ({ set }, record: CallingRecord[] | DefaultValue) => {
    set(CallingAtom, (prev) => ({
      ...prev,
      record: record instanceof DefaultValue ? [] : record
    }));
  }
});