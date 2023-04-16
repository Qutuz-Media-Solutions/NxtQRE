import { atom } from 'jotai';

export const dataAtom = atom({
  light: false,
  lastUpdate: 0,
  name: 'Omar Q',
});

export const counter = atom(0);
