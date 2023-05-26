import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC1iMe6pM1o6v32IJqcSQ-3PSnp4unIgAs',
  authDomain: 'twitter-app-5d2fa.firebaseapp.com',
  databaseURL: 'https://twitter-app-5d2fa-default-rtdb.firebaseio.com',
  projectId: 'twitter-app-5d2fa',
  storageBucket: 'twitter-app-5d2fa.appspot.com',
  messagingSenderId: '873625730417',
  appId: '1:873625730417:web:eabea9dd6e6f1d89ea0ad0',
};

export const app = firebase.initializeApp(firebaseConfig);
firebase.firestore();

export { firebase };

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};
