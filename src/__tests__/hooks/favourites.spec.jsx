import { act } from 'react-test-renderer';

import { renderHook } from '@testing-library/react-hooks';
import { FavouritesProvider, useFavourites } from '../../hooks/favourites';

describe('Favoutire hooke', () => {
  it('should be able to add favorite and remove movie', () => {
    const { result } = renderHook(() => useFavourites(), {
      wrapper: FavouritesProvider,
    });

    act(() => {
      result.current.favoriteMovie('movieId123', 'Movie title');
    });

    expect(result.current.favourites).toEqual([
      { id: 'movieId123', title: 'Movie title' },
    ]);

    act(() => {
      result.current.favoriteMovie('movieId123', 'Movie title');
    });

    expect(result.current.favourites).toEqual([]);
  });
});
