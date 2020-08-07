import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FiHeart } from 'react-icons/fi';

import { useFavourites } from '../../hooks/favourites';

import * as S from './styles';

const FavouriteButton = ({ id, title, full = false }) => {
  const [favorite, setFavorite] = useState(false);
  const { favoriteMovie, favourites } = useFavourites();

  useEffect(() => {
    setFavorite(favourites.filter(item => item.id === id).length > 0);
  }, [favourites, id]);

  const textButton = useMemo(
    () => (favorite ? 'Remove from favourites' : 'Add to favourites'),
    [favorite],
  );

  const handleFavorite = () => favoriteMovie({ id, title });

  return (
    <S.Container
      className="FavouriteButton"
      type="button"
      onClick={handleFavorite}
      isFavorite={favorite}
      full={full}
      data-testid="favButton"
    >
      <FiHeart />
      {full && <span>{textButton}</span>}
    </S.Container>
  );
};

export default FavouriteButton;

FavouriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  full: PropTypes.bool,
};

FavouriteButton.defaultProps = {
  full: false,
  title: null,
};
