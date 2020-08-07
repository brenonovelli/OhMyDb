import { act } from 'react-test-renderer';

import { renderHook } from '@testing-library/react-hooks';
import { FavouritesProvider, useFavourites } from '../../hooks/favourites';

const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

const mockedMovies = [
  { id: 'movieId123', title: 'Movie title 1' },
  { id: 'movieId456', title: 'Movie title 2' },
  { id: 'movieId789', title: 'Movie title 3' },
];

describe('Favoutire hook', () => {
  it('should be able to add favorite and remove movie', async () => {
    const { result } = renderHook(() => useFavourites(), {
      wrapper: FavouritesProvider,
    });

    act(() => {
      result.current.favoriteMovie(mockedMovies[0]);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      '@OhMyDB:favourites',
      JSON.stringify([mockedMovies[0]]),
    );

    expect(result.current.favourites).toEqual([mockedMovies[0]]);

    act(() => {
      result.current.favoriteMovie(mockedMovies[0]);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      '@OhMyDB:favourites',
      JSON.stringify([]),
    );

    expect(result.current.favourites).toEqual([]);
  });

  it('should be able to only one favorite', () => {
    const { result } = renderHook(() => useFavourites(), {
      wrapper: FavouritesProvider,
    });

    act(() => {
      result.current.favoriteMovie(mockedMovies[0]);
    });

    act(() => {
      result.current.favoriteMovie(mockedMovies[1]);
    });

    act(() => {
      result.current.favoriteMovie(mockedMovies[2]);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      '@OhMyDB:favourites',
      JSON.stringify(mockedMovies),
    );

    expect(result.current.favourites).toEqual(mockedMovies);

    act(() => {
      result.current.favoriteMovie(mockedMovies[0]);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      '@OhMyDB:favourites',
      JSON.stringify([mockedMovies[1], mockedMovies[2]]),
    );

    expect(result.current.favourites).toEqual([
      mockedMovies[1],
      mockedMovies[2],
    ]);
  });

  it('should be able to show the number of favourites', () => {
    const { result } = renderHook(() => useFavourites(), {
      wrapper: FavouritesProvider,
    });

    expect(result.current.favouritesCount).toEqual(2);
  });

  it('should restore saved data from storage when app inits', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@OhMyDB:favourites':
          return JSON.stringify([mockedMovies[1], mockedMovies[2]]);

        default:
          return null;
      }
    });

    const { result } = renderHook(() => useFavourites(), {
      wrapper: FavouritesProvider,
    });

    expect(result.current.favourites).toEqual([
      mockedMovies[1],
      mockedMovies[2],
    ]);
  });

  it('should be able to limit the number of favourites to 99', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@OhMyDB:favourites':
          return JSON.stringify(Array.from({ length: 100 }));

        default:
          return null;
      }
    });

    const { result } = renderHook(() => useFavourites(), {
      wrapper: FavouritesProvider,
    });

    expect(result.current.favouritesCount).toEqual('+99');
  });
});
