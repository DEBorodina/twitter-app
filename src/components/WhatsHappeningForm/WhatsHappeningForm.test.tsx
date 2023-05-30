import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { WhatsHappeningForm } from '.';

jest.mock('@/utils/TwitsHelper', () => ({
  TwitsHelper: {
    addTwit: jest.fn(),
  },
}));

describe('Whats happening form test', () => {
  it('Should display form with current user', () => {
    const onAddNewTwit = jest.fn();
    const user = {
      name: 'name',
      email: 'email',
    };
    render(<WhatsHappeningForm user={user} onAddNewTwit={onAddNewTwit} />);
    expect(screen.getByPlaceholderText('Whats happening')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('email')).toBeInTheDocument();
  });

  it('Should add todo', async () => {
    const onAddNewTwit = jest.fn();
    const user = {
      name: 'name',
      email: 'email',
    };
    render(<WhatsHappeningForm user={user} onAddNewTwit={onAddNewTwit} />);
    const textarea = screen.getByPlaceholderText('Whats happening');
    fireEvent.change(textarea, { target: { value: 'new twit' } });
    const button = screen.getByLabelText('add-button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(onAddNewTwit).toBeCalled();
    });
  });

  it("shouldn't add empty todo", async () => {
    const onAddNewTwit = jest.fn();
    const user = {
      name: 'name',
      email: 'email',
    };
    render(<WhatsHappeningForm user={user} onAddNewTwit={onAddNewTwit} />);
    const button = screen.getByLabelText('add-button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(onAddNewTwit).not.toBeCalled();
    });
  });
});
