import React from 'react';
import { act, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import Movie from '../../pages/Movie';
import api from '../../services/api';

const mockedHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    Link: 'Link',
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    useParams: () => ({
      id: 'tt1702425',
    }),
  };
});

jest.mock('../../services/api', () => {
  const mockReponse = {
    Title: 'Casa de mi Padre',
    Year: '2012',
    Rated: 'R',
    Released: '11 May 2012',
    Runtime: '84 min',
    Genre: 'Comedy, Western',
    Director: 'Matt Piedmont',
    Writer: 'Andrew Steele, Eva Maria Peters (dubbing dialogue)',
    Actors: 'Will Ferrell, Diego Luna, Pedro Armendáriz Jr., Genesis Rodriguez',
    Plot:
      "Scheming on a way to save their father's ranch, the Alvarez brothers find themselves in a war with Mexico's most feared drug lord.",
    Language: 'Spanish, English',
    Country: 'USA, Mexico',
    Awards: '3 wins & 9 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BODE1MDYzNjA0NF5BMl5BanBnXkFtZTcwNjY2MTgyNw@@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '5.5/10' },
      { Source: 'Rotten Tomatoes', Value: '41%' },
      { Source: 'Metacritic', Value: '52/100' },
    ],
    Metascore: '52',
    imdbRating: '5.5',
    imdbVotes: '19,933',
    imdbID: 'tt1702425',
    Type: 'movie',
    DVD: '17 Jul 2012',
    BoxOffice: '$5,895,238',
    Production: 'Pantelion Films',
    Website: 'N/A',
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
      favourites: [],
    }),
  };
});

describe('Movie Page', () => {
  it('should be able to render a title of movie', async () => {
    const helmetContext = {};

    const { getByText } = render(
      <HelmetProvider context={helmetContext}>
        <Movie />
      </HelmetProvider>,
    );

    expect(getByText(/loading/i)).toBeTruthy();

    await act(async () => {
      await api.get;
    });

    expect(getByText('Casa de mi Padre')).toBeTruthy();
  });
});
