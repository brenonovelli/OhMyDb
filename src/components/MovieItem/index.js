import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiFilm, FiLoader } from 'react-icons/fi';

import FavouriteButton from '../FavouriteButton';

import * as S from './styles';

const MovieItem = ({ movie }) => {
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    if (movie) {
      if (movie.Poster === 'N/A') {
        setPoster(false);
      } else {
        setPoster(movie.Poster);
      }
    }
  }, [movie]);

  return (
    <S.Container empty={!!movie} data-testid="movieItem">
      {movie ? (
        <>
          <FavouriteButton id={movie.imdbID} title={movie.Title} />

          <Link to={`/movie/${movie.imdbID}`}>
            {poster ? (
              <img src={poster} alt={movie.Title} />
            ) : (
              <S.PlaceholderPoster>
                <FiFilm />
              </S.PlaceholderPoster>
            )}

            <S.InfosWrapper hasPoster={!!poster}>
              <strong>{movie.Title}</strong>
              <span>{movie.Year}</span>
            </S.InfosWrapper>
          </Link>
        </>
      ) : (
        <FiLoader />
      )}
    </S.Container>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
  }),
};

MovieItem.defaultProps = {
  movie: null,
};
