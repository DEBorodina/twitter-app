import { render, screen } from '@testing-library/react';

import { ProfileHeader } from '.';

describe('profile header test', () => {
  it('Should display user', () => {
    const user = {
      email: 'email',
      name: 'name',
    };
    render(
      <ProfileHeader
        user={user}
        onProfileUpdate={jest.fn()}
        onMenuOpen={jest.fn()}
        onSearchOpen={jest.fn()}
      />
    );
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('email')).toBeInTheDocument();
  });
});
