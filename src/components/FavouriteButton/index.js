import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FiHeart } from 'react-icons/fi';

import { useFavourites } from '~/hooks/favourites';

import * as S from './styles';

const FavouriteButton = ({ movieId, full = false }) => {
  const [favorite, setFavorite] = useState(false);
  const { favoriteMovie, favourites } = useFavourites();

  useEffect(() => {
    setFavorite(favourites.indexOf(movieId) >= 0);
  }, [favourites, movieId]);

  const textButton = useMemo(
    () => (favorite ? 'Remove from favourites' : 'Add to favourites'),
    [favorite],
  );

  const handleFavorite = () => favoriteMovie(movieId);

  return (
    <S.Container
      className="FavouriteButton"
      type="button"
      onClick={handleFavorite}
      isFavorite={favorite}
      full={full}
    >
      <FiHeart />
      {full && <span>{textButton}</span>}
    </S.Container>
  );
};

export default FavouriteButton;

FavouriteButton.propTypes = {
  movieId: PropTypes.string.isRequired,
  full: PropTypes.bool,
};

FavouriteButton.defaultProps = {
  full: false,
};
