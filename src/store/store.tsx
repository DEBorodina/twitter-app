import { getFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose,createStore } from 'redux';
import { getFirestore,reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

import { firebase as firebaseConfig } from '@/firebaseConfig';

import { rootReducer } from './reducers/rootReducer';

const extraArgs = { getFirestore, getFirebase };

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(extraArgs)),
    reduxFirestore(firebaseConfig)
  )
);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type ExtraArgs = typeof extraArgs;
