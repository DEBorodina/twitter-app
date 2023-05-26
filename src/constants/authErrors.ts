export interface AuthErrorTypes {
  [key: string]: string;
}

export const authErrors: AuthErrorTypes = {
  'auth/user-not-found': 'Email not found',
  'auth/wrong-password': 'Wrong password',
  'auth/email-already-in-use': 'Email already in use',
  'auth/too-many-requests': 'Too many requests. Wait and try again',
};
