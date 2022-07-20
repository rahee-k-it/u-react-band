import { atom } from "recoil";

export const clickWriteAtom = atom({
  key: "clickWrite",
  default: false,
});

export const clickSetupAtom = atom({
  key: "clickSetup",
  default: false,
});

export const darkAtom = atom({
  key: "dark",
  default: 1,
});

export const darkWriteBoxAtom = atom({
  key: "darkWrtieBox",
  default: 1,
});
