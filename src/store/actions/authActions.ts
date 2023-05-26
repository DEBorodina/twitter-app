import { GoogleAuthProvider } from 'firebase/auth';
import { ThunkAction } from 'redux-thunk';

import { app } from '@/firebaseConfig';
import { ICredentials, IError, ISignUPCredentials } from '@/types';

import { ExtraArgs, RootState } from '../store';
import {
  AuthActions,
  AuthActionTypes,
  AuthErrorAction,
  AuthSuccessAction,
  ResetErrorsAction,
} from './types';

export const authError = (error: IError): AuthErrorAction => ({
  type: AuthActionTypes.AUTH_ERROR,
  payload: error.code,
});

export const authSuccess = (): AuthSuccessAction => ({
  type: AuthActionTypes.AUTH_SUCCESS,
});

export const resetAuthErrors = (): ResetErrorsAction => ({
  type: AuthActionTypes.RESET_ERRORS,
});

export const signIn =
  (
    credentials: ICredentials
  ): ThunkAction<void, RootState, ExtraArgs, AuthActions> =>
  async (dispatch, _, { getFirebase }) => {
    try {
      const firebase = getFirebase();

      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);

      dispatch(authSuccess());
    } catch (error) {
      dispatch(authError(error as IError));
    }
  };

export const signOut =
  (): ThunkAction<void, RootState, ExtraArgs, AuthActions> =>
  async (dispatch, _, { getFirebase }) => {
    try {
      const firebase = getFirebase();
      await firebase.auth().signOut();
      dispatch(authSuccess());
    } catch (error) {
      dispatch(authError(error as IError));
    }
  };

export const signUp =
  (
    newUser: ISignUPCredentials
  ): ThunkAction<void, RootState, ExtraArgs, AuthActions> =>
  async (dispatch, _, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore(app);

    try {
      const { email, password, name, birthday } = newUser;

      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      const { uid } = result.user!;

      await firestore.collection('users').doc(uid).set({
        name,
        birthday,
        email,
      });

      dispatch(authSuccess());
    } catch (error) {
      dispatch(authError(error as IError));
    }
  };

export const signInWithGoogle =
  (): ThunkAction<void, RootState, ExtraArgs, AuthActions> =>
  async (dispatch, _, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore(app);
    const provider = new GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { uid, displayName, email } = result.user!;

      const doc = await firestore.collection('users').doc(uid).get();

      if (!doc.exists) {
        return firestore.collection('users').doc(uid).set({
          name: displayName,
          email,
          birthday: null,
        });
      }

      dispatch(authSuccess());
    } catch (error) {
      dispatch(authError(error as IError));
    }
  };
