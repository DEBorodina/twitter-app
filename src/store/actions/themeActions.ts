import { theme } from '@/constants/themes';

import { ChangeThemeAction, ThemeActionTypes } from './types';

export const changeTheme = (newTheme: theme): ChangeThemeAction => ({
  type: ThemeActionTypes.CHANGE_THEME,
  payload: newTheme,
});
