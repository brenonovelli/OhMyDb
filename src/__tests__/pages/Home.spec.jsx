import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../../pages/Home';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
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

describe('Home Page', () => {
  it('should be able to search a movie', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const searchForm = getByTestId('searchForm');
    const searchField = getByTestId('searchInput');

    const term = 'shadows';

    fireEvent.change(searchField, { target: { value: term } });

    fireEvent.submit(searchForm);

    expect(mockHistoryPush).toHaveBeenCalledWith(`/search/${term}/1`);
  });
});
