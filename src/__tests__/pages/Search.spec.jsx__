import React from 'react';
import { act, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import api from '../../services/api';

import Search from '../../pages/Search';

const mockedHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    Link: 'a',
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    useParams: () => ({
      term: 'shadows',
      page: '1',
    }),
  };
});

jest.mock('../../services/api', () => {
  const mockReponse = {
    Search: [
      {
        Title: 'Novelli in famiglia',
        Year: '1899',
        imdbID: 'tt2217248',
        Type: 'movie',
        Poster: 'N/A',
      },
      {
        Title: 'Commendator Ermete Novelli: Impressioni dalla critica',
        Year: '1899',
        imdbID: 'tt2240994',
        Type: 'movie',
        Poster: 'N/A',
      },
    ],
    totalResults: '2',
    Response: 'True',
  };

  return {
    get: jest.fn().mockResolvedValue({ data: { ...mockReponse } }),
  };
});

jest.mock('../../hooks/favourites', () => {
  return {
    useFavourites: () => ({
      favoriteMovie: jest.fn(),
    }),
  };
});

describe('Search Page', () => {
  it('should be able to render an movie name', async () => {
    const helmetContext = {};

    const { getByText } = render(
      <HelmetProvider context={helmetContext}>
        <Search />
      </HelmetProvider>,
    );

    await act(async () => {
      await api.get;
    });

    expect(getByText('Novelli in famiglia')).toBeTruthy();
  });
});
