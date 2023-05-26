import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReducer';
import themeReducer from './themeReducer';

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  theme: themeReducer,
  auth: authReducer,
});
