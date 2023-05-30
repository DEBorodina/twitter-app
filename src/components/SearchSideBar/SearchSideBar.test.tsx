import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { SearchUser } from '../SearchUser';
import { SearchSideBar } from '.';

const users = [
  { name: 'user name', email: 'email', id: '1' },
  { name: 'user name 2', email: 'email 2', id: '2' },
];

describe('Search sidebar test', () => {
  it('Should display placeholder', () => {
    const fetchData = jest.fn().mockReturnValue(1);
    render(
      <SearchSideBar
        placeholder="search"
        errorStatus="not found"
        ListItem={SearchUser}
        innerRef={null}
        fetchData={fetchData}
      />
    );
    expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
  });

  it('Should search ', async () => {
    const fetchData = jest.fn().mockReturnValue(users);
    render(
      <SearchSideBar
        placeholder="search"
        errorStatus="not found"
        ListItem={SearchUser}
        innerRef={null}
        fetchData={fetchData}
      />
    );
    const input = screen.getByPlaceholderText('search');
    fireEvent.change(input, { target: { value: 'user' } });
    fireEvent.click(screen.getByLabelText('search-button'));
    await waitFor(() => {
      expect(screen.getByText('user name')).toBeInTheDocument();
      expect(screen.getByText('user name 2')).toBeInTheDocument();
      expect(screen.getByText('email')).toBeInTheDocument();
      expect(screen.getByText('email 2')).toBeInTheDocument();
    });
  });

  it('Should show not found', async () => {
    const fetchData = jest.fn().mockReturnValue([]);
    render(
      <SearchSideBar
        placeholder="search"
        errorStatus="not found"
        ListItem={SearchUser}
        innerRef={null}
        fetchData={fetchData}
      />
    );
    const input = screen.getByPlaceholderText('search');
    fireEvent.change(input, { target: { value: 'user' } });
    fireEvent.click(screen.getByLabelText('search-button'));
    await waitFor(() => {
      expect(screen.getByText('not found')).toBeInTheDocument();
    });
  });
});
