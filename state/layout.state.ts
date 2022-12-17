import { atom } from 'recoil';

export const layoutState = atom({
  key: 'myLayout',
  default: {
    fullFrame: false,
  },
});
