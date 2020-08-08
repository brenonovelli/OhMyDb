import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';

import searchResponse from '../../__fixtures__/search.data.json';

import Search from '../../pages/Search';

jest.mock('../../hooks/favourites', () => {
  return {
    useFavourites: () => ({
      favoriteMovie: jest.fn(),
      favourites: [],
      favouritesCount: 20,
    }),
  };
});

// const mockedHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    term: 'novelli',
    page: '1',
  }),
}));

const apiMock = new MockAdapter(api);

describe('Search Page', () => {
  it('should be able to render an movie name', async () => {
    const helmetContext = {};

    const { getByText } = render(
      <MemoryRouter>
        <HelmetProvider context={helmetContext}>
          <Search />
        </HelmetProvider>
      </MemoryRouter>,
    );

    await act(async () => {
      await apiMock
        .onGet('&s=novelli&page=1')
        .reply(200, { ...searchResponse });
    });

    expect(getByText('Novelli in famiglia')).toBeTruthy();
  });
});
