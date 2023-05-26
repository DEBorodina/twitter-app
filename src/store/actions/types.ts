import { theme } from '@/constants/themes';

export enum ThemeActionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
}

export interface ChangeThemeAction {
  type: ThemeActionTypes.CHANGE_THEME;
  payload: theme;
}

export enum AuthActionTypes {
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_ERROR = 'AUTH_ERROR',
  RESET_ERRORS = 'RESET_ERRORS',
}

export interface ResetErrorsAction {
  type: AuthActionTypes.RESET_ERRORS;
}

export interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS;
}

export interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR;
  payload: string;
}

export type ThemeActions = ChangeThemeAction;
export type AuthActions =
  | AuthSuccessAction
  | AuthErrorAction
  | ResetErrorsAction;
