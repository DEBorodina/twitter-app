import { theme } from '@/constants/themes';

import { ThemeActions, ThemeActionTypes } from '../actions/types';
import { ThemeState } from './types';

const currentTheme = (localStorage.getItem('theme') ?? 'light') as theme;

const initialState = {
  theme: currentTheme,
};

const themeReducer = (
  state: ThemeState = initialState,
  { type, payload }: ThemeActions
) => {
  switch (type) {
    case ThemeActionTypes.CHANGE_THEME:
      localStorage.setItem('theme', payload);
      return {
        theme: payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
