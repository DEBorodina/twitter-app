import {
  fireEvent,
  render as RTLrender,
  screen,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { EditProfileForm } from '.';
import { EditProfileData } from './types';

const mockUseAppDispatch = jest.fn();
const mockUpdateUser = jest.fn();

jest.mock('@/hooks', () => ({
  ...jest.requireActual('@/hooks'),
  useAppDispatch: () => mockUseAppDispatch(),
}));

jest.mock('@/utils/UserHelper', () => ({
  UserHelper: {
    updateUser: (data: EditProfileData) => mockUpdateUser(data),
  },
}));

const store = configureStore()({
  theme: {
    theme: 'light',
  },
});

const render = (component: React.ReactElement) =>
  RTLrender(<Provider store={store}>{component}</Provider>);

describe('Edit profile form test', () => {
  it('Test valid user data', async () => {
    const onDone = jest.fn();
    const mockUser = {
      name: 'user name',
      telegram: '@telegram',
      gender: 'male',
      password: '',
    };
    render(
      <EditProfileForm setOpen={jest.fn()} onDone={onDone} user={mockUser} />
    );
    fireEvent.click(screen.getByText('save'));

    await waitFor(() => {
      expect(onDone).toBeCalled();
      expect(mockUpdateUser).toBeCalledWith(mockUser);
    });
  });

  it('Test empty user name', async () => {
    const onDone = jest.fn();
    const mockUser = {
      name: '',
      telegram: '@telegram',
      gender: 'male',
      password: '',
    };
    render(
      <EditProfileForm setOpen={jest.fn()} onDone={onDone} user={mockUser} />
    );
    fireEvent.click(screen.getByText('save'));

    await waitFor(() => {
      expect(onDone).not.toBeCalled();
      expect(screen.getByText('User name is required')).toBeInTheDocument();
    });
  });

  it('Test empty user name', async () => {
    const onDone = jest.fn();
    const mockUser = {
      name: 'user name',
      telegram: 'telegram',
      gender: 'male',
      password: '',
    };
    render(
      <EditProfileForm setOpen={jest.fn()} onDone={onDone} user={mockUser} />
    );
    fireEvent.click(screen.getByText('save'));

    await waitFor(() => {
      expect(onDone).not.toBeCalled();
      expect(
        screen.getByText('Telegram link is not valid')
      ).toBeInTheDocument();
    });
  });
});
