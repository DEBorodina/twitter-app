import { fireEvent, render as RTLrender, screen } from '@testing-library/react';
import { createRef, Ref } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { SideMenu } from '.';

import 'jest-styled-components';

const mockUseAppDispatch = jest.fn();
jest.mock('@/hooks', () => ({
  useAppDispatch: () => mockUseAppDispatch,
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/profile',
  }),
}));

const store = configureStore()({
  firebase: {
    profile: {
      name: 'user name',
      email: 'user email',
    },
  },
});

const render = (component: React.ReactElement) =>
  RTLrender(
    <BrowserRouter>
      <Provider store={store}>{component}</Provider>
    </BrowserRouter>
  );

describe('Search user test', () => {
  it('Should display current location', () => {
    const onClick = jest.fn();
    const ref = createRef() as Ref<HTMLDivElement>;
    render(<SideMenu onDone={onClick} ref={ref} />);
    const profile = screen.getByText('Profile');
    expect(profile).toHaveStyleRule('font-weight', '600');
  });

  it('Should log out', () => {
    const onClick = jest.fn();
    const ref = createRef() as Ref<HTMLDivElement>;
    render(<SideMenu onDone={onClick} ref={ref} />);
    const logOut = screen.getByText('Log out');
    fireEvent.click(logOut);
    expect(mockUseAppDispatch).toBeCalled();
  });
});
