import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import FavouriteButton from '../../components/FavouriteButton';

const mockedFavouriteMovie = jest.fn();

jest.mock('../../hooks/favourites', () => {
  return {
    useFavourites: () => ({
      favoriteMovie: mockedFavouriteMovie,
      favourites: ['tt2217248'],
    }),
  };
});

describe('FavouriteButton Component', () => {
  it('should be able to load full template', () => {
    const { getByText, rerender } = render(
      <FavouriteButton movieId="tt22172xx" />,
    );

    rerender(<FavouriteButton movieId="tt22172xx" full />);

    expect(getByText('Add to favourites')).toBeTruthy();
  });

  it('should be able to load mini template without quote', () => {
    render(<FavouriteButton movieId="tt22172xx" />);

    const spanWithText = screen.queryByText('Add to favourites');

    expect(spanWithText).toBeNull();
  });

  it('should be able to load favorite function', () => {
    render(<FavouriteButton movieId="tt2217248" />);

    const favButton = screen.getByTestId('favButton');

    fireEvent.click(favButton);

    expect(mockedFavouriteMovie).toHaveBeenCalledWith('tt2217248', null);
  });

  // it('should be able to load full template favorited', () => {
  //   render(<FavouriteButton movieId="tt2217248" full />);

  //   screen.getByText('Remove from favourites');
  // });
});
