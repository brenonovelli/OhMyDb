import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act, render, waitForElementToBeRemoved } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { SWRConfig, cache } from 'swr';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';

import movieResponse from '../../__fixtures__/movie.data.json';
import movieNotFoundResponse from '../../__fixtures__/movie-not-found.data.json';

import Movie from '../../pages/Movie';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 'tt123456',
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

const apiMock = new MockAdapter(api);

afterEach(() => {
  cache.clear();
});

describe('Movie Page', () => {
  it('should be able to render the movie', async () => {
    const helmetContext = {};

    const { getByText } = render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <MemoryRouter>
          <HelmetProvider context={helmetContext}>
            <Movie />
          </HelmetProvider>
        </MemoryRouter>
      </SWRConfig>,
    );

    expect(getByText(/loading/i)).toBeTruthy();

    await act(async () => {
      await apiMock.onGet('&i=tt123456').reply(200, { ...movieResponse });
    });

    expect(getByText('Casa de mi Padre')).toBeTruthy();
  });

  it('should be able to show error message on incorrect IMDb ID', async () => {
    const helmetContext = {};

    const { getByText } = render(
      <MemoryRouter>
        <HelmetProvider context={helmetContext}>
          <SWRConfig value={{ dedupingInterval: 0 }}>
            <Movie />
          </SWRConfig>
        </HelmetProvider>
      </MemoryRouter>,
    );

    expect(getByText(/loading/i)).toBeTruthy();

    await act(async () => {
      await apiMock
        .onGet('&i=tt123456')
        .reply(200, { ...movieNotFoundResponse });
    });

    expect(getByText('Incorrect IMDb ID.')).toBeTruthy();
  });

  // it('should be able to show error message on incorrect request', async () => {
  //   const helmetContext = {};

  //   render(
  //     <MemoryRouter>
  //       <HelmetProvider context={helmetContext}>
  //         <Movie />
  //       </HelmetProvider>
  //     </MemoryRouter>,
  //   );

  //   await act(async () => {
  //     await apiMock.onGet('&i=tt123456').networkError();
  //   });

  //   expect(screen.queryByText('Something went wrong')).toBeTruthy();
  // });
});
