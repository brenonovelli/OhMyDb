import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import BottomBar from '../../components/BottomBar';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}));

jest.mock('../../hooks/favourites', () => {
  return {
    useFavourites: () => ({
      favoriteMovie: jest.fn(),
      favourites: [],
      favouritesCount: 20,
    }),
  };
});

describe('BottomBar Component', () => {
  it('should be able to load', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <BottomBar />
      </MemoryRouter>,
    );

    const homeLink = getByTestId('homeLink');
    const favouritesLink = getByTestId('favouritesLink');

    expect(homeLink).toBeTruthy();
    expect(favouritesLink).toBeTruthy();
  });

  it('should be able show numbers of favourites', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <BottomBar />
      </MemoryRouter>,
    );

    const countFav = getByText('20');

    expect(countFav).toBeTruthy();
  });
});
