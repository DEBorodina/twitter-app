import { render, screen } from '@testing-library/react';

import { SearchUser } from '.';

describe('Search user test', () => {
  it('Should display user', () => {
    render(<SearchUser name="user name" email="use email" id="1" />);
    expect(screen.getByText('user name')).toBeInTheDocument();
    expect(screen.getByText('use email')).toBeInTheDocument();
  });
});
