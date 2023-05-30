import { render as RTLrender, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { SearchTwit } from '.';

const store = configureStore()({
  firebase: {
    profile: {
      name: 'user name',
      email: 'user email',
    },
  },
});

const render = (component: React.ReactElement) =>
  RTLrender(<Provider store={store}>{component}</Provider>);

describe('Search twit test', () => {
  it('Should display twit', () => {
    render(
      <SearchTwit
        text="text"
        id="1"
        authorId="1"
        createdAt={new Date()}
        image="image.png"
      />
    );
    expect(screen.getByText('text')).toBeInTheDocument();
    expect(screen.getByText('a few seconds ago')).toBeInTheDocument();
  });
});
