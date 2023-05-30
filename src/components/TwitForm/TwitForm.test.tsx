import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { TwitForm } from '.';

jest.mock('@/utils/TwitsHelper', () => ({
  TwitsHelper: {
    addTwit: jest.fn(),
  },
}));

describe('Whats happening form test', () => {
  it('Should display form', () => {
    const onAddNewTwit = jest.fn();
    const onCancel = jest.fn();
    render(<TwitForm setOpen={onCancel} onDone={onAddNewTwit} />);
    expect(screen.getByPlaceholderText('Twit')).toBeInTheDocument();
  });

  it('Should add todo', async () => {
    const onAddNewTwit = jest.fn();
    const onClose = jest.fn();
    render(<TwitForm setOpen={onClose} onDone={onAddNewTwit} />);

    const textarea = screen.getByPlaceholderText('Twit');
    fireEvent.change(textarea, {
      target: { innerHTML: 'New content text' },
    });
    expect(screen.getByText('New content text')).toBeInTheDocument();
  });

  it("shouldn't add empty todo", async () => {
    const onAddNewTwit = jest.fn();
    const onClose = jest.fn();
    render(<TwitForm setOpen={onClose} onDone={onAddNewTwit} />);

    const button = screen.getByLabelText('add-button');
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText('Text is required')).toBeInTheDocument();
      expect(onAddNewTwit).not.toBeCalled();
      expect(onClose).not.toBeCalled();
    });
  });

  it('should cancel add todo', async () => {
    const onAddNewTwit = jest.fn();
    const onClose = jest.fn();
    render(<TwitForm setOpen={onClose} onDone={onAddNewTwit} />);

    const button = screen.getByLabelText('cancel-button');
    fireEvent.click(button);

    expect(onAddNewTwit).not.toBeCalled();
    expect(onClose).toBeCalled();
  });
});
