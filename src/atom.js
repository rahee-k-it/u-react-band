import { atom } from "recoil";

export const clickAtom = atom({
  key: "clicked",
  default: false,
});

export const darkAtom = atom({
  key: "darkAtom",
  default: 1,
});
