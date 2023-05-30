import { render, screen } from '@testing-library/react';

import { Twit } from '.';

describe('Twit test', () => {
  it('Should display twit', () => {
    render(
      <Twit
        authorEmail="author email"
        authorName="author name"
        text="text"
        createdAt={new Date()}
        image="image.png"
        id="1"
      />
    );
    expect(screen.getByText('author name')).toBeInTheDocument();
    expect(screen.getByText('author email')).toBeInTheDocument();
    expect(screen.getByText('text')).toBeInTheDocument();
    expect(screen.getByText('a few seconds ago')).toBeInTheDocument();
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'image.png');
  });
});
