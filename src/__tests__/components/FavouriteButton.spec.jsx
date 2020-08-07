import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import FavouriteButton from '../../components/FavouriteButton';

const mockedFavouriteMovie = jest.fn();
const mockedMovie = { id: 'tt2217248', title: 'Movie title' };

jest.mock('../../hooks/favourites', () => {
  return {
    useFavourites: () => ({
      favoriteMovie: mockedFavouriteMovie,
      favourites: [mockedMovie],
    }),
  };
});

describe('FavouriteButton Component', () => {
  it('should be able to load full template', () => {
    const { getByText, rerender } = render(<FavouriteButton id="tt22172xx" />);

    rerender(<FavouriteButton id="tt22172xx" full />);

    expect(getByText('Add to favourites')).toBeTruthy();
  });

  it('should be able to load mini template without quote', () => {
    render(<FavouriteButton id="tt22172xx" />);

    const spanWithText = screen.queryByText('Add to favourites');

    expect(spanWithText).toBeNull();
  });

  it('should be able to load favorite function', () => {
    render(<FavouriteButton id={mockedMovie.id} title={mockedMovie.title} />);

    const favButton = screen.getByTestId('favButton');

    fireEvent.click(favButton);

    expect(mockedFavouriteMovie).toHaveBeenCalledWith({
      id: 'tt2217248',
      title: 'Movie title',
    });
  });

  it.todo(
    'should be able to load full template favorited',
    // , () => {
    //   render(<FavouriteButton id="tt2217248" full />);

    //   screen.getByText('Remove from favourites');
    // }
  );
});
