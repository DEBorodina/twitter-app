jest.mock('moment', () => ({
  default: jest.requireActual('moment'),
}));

jest.mock('@/firebaseConfig', () => ({
  firebaseConfig: {},
}));

jest.mock('@/constants/icons');
