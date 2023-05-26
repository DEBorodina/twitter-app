import { authErrors } from '@/constants/authErrors';

import { AuthActions, AuthActionTypes } from '../actions/types';
import { AuthState } from './types';

const initialState = {
  authError: '',
};

const authReducer = (state: AuthState = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_ERROR:
      let error = action.payload;

      if (authErrors[error]) {
        error = authErrors[error];
      }

      return {
        ...state,
        authError: error,
      };

    case AuthActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        authError: '',
      };

    case AuthActionTypes.RESET_ERRORS:
      return {
        ...state,
        authError: '',
      };
    default:
      return state;
  }
};

export default authReducer;
