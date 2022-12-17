import { atom } from 'recoil';

const defaultState = {
  fullFrame: false,
}

export const layoutState = atom({
  key: 'layout',
  default: defaultState,
});
