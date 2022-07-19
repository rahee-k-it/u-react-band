import { atom } from "recoil";

export const clickWriteAtom = atom({
  key: "clickWrite",
  default: false,
});

export const darkAtom = atom({
  key: "darkAtom",
  default: 1,
});
