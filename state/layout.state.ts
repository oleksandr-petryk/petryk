import { atom } from 'recoil';

export const layoutState = atom({
  key: 'layout',
  default: {
    fullFrame: false,
  },
});
