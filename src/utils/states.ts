import { atom, selector } from "recoil";

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
