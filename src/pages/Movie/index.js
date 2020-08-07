import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { MdKeyboardBackspace } from 'react-icons/md';
import { FiAlertCircle } from 'react-icons/fi';

import api from '../../services/api';

import logoIMDd from '../../assets/logo_imdb.svg';
import logoRottenTomatoes from '../../assets/logo_rotten_tomatoes.svg';

import BoxAlert from '../../components/BoxAlert';
import FavouriteButton from '../../components/FavouriteButton';
import Loading from '../../components/Loading';
import SearchForm from '../../components/SearchForm';
import BottomBar from '../../components/BottomBar';

import * as S from './styles';

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [infos, setInfos] = useState({});
  const [errorResponse, setErrorResponse] = useState();

  const [rottenTomatoes, setRottenTomatoes] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  const loadMovie = useCallback(async () => {
    setLoading(true);

    if (!id) {
      setErrorResponse('Movie not found.');
      setLoading(false);
      return;
    }

    try {
      const response = await api.get(`&i=${id}`);

      if (response.data.Response !== 'False') {
        const {
          Runtime,
          Year,
          Rated,
          Title,
          imdbRating,
          Ratings,
          Plot,
          Actors,
          Genre,
          Director,
          Poster,
        } = response.data;

        if (Ratings) {
          const responseRottenTomatoes = Ratings.filter(
            item => item.Source === 'Rotten Tomatoes',
          );

          if (responseRottenTomatoes.length > 0) {
            setRottenTomatoes(responseRottenTomatoes[0].Value);
          }
        }

        setInfos({
          Runtime,
          Year,
          Rated,
          Title,
          imdbRating,
          Plot,
          Actors: Actors.split(',').map(item => item.trim()),
          Genre: Genre.split(',').map(item => item.trim()),
          Director: Director.split(',').map(item => item.trim()),
          Poster,
        });

        setErrorResponse(null);

        setLoading(false);
      } else {
        const { Error } = response.data;

        setErrorResponse(Error);
      }
    } catch (err) {
      setErrorResponse('Something went wrong. Try again.');
    }

    setLoading(false);
  }, [id]);

  useEffect(() => {
    loadMovie();
  }, [loadMovie]);

  return (
    <S.Container className="mainWrapper">
      <Helmet>
        <title>{infos && infos.Title}</title>
      </Helmet>

      <BottomBar />

      <S.NavTop>
        <button type="button" onClick={() => history.goBack()}>
          <MdKeyboardBackspace />
        </button>
      </S.NavTop>

      {loading && <Loading />}

      {errorResponse && (
        <>
          <SearchForm />
          <BoxAlert>
            <FiAlertCircle />
            <h3>{errorResponse}</h3>
            <span>Try again or search for another movie.</span>
          </BoxAlert>
        </>
      )}

      {!errorResponse && (
        <>
          <S.ContainerInfos loading={loading ? 1 : 0}>
            {!loading && (
              <>
                <header>
                  <S.SmallInfos>
                    <span>{infos.Runtime}</span>
                    <span>{infos.Year}</span>
                    {infos.Rated !== 'N/A' && (
                      <span className="rated">{infos.Rated}</span>
                    )}
                  </S.SmallInfos>

                  <h1>{infos.Title}</h1>

                  <S.MoreInfos>
                    <div className="item">
                      <div className="logo imbd">
                        <img src={logoIMDd} alt="Metascote IMDb" />
                      </div>
                      <div className="value">{infos.imdbRating} / 10</div>
                    </div>

                    {rottenTomatoes && (
                      <div className="item">
                        <div className="logo rottenTomatoes">
                          <img
                            src={logoRottenTomatoes}
                            alt="Rattings Rotten Tomatoes"
                          />
                        </div>
                        <div className="value">{rottenTomatoes}</div>
                      </div>
                    )}

                    <FavouriteButton id={id} title={infos.Title} full />
                  </S.MoreInfos>
                </header>

                <section>
                  <h2>Plot</h2>
                  <p>{infos.Plot}</p>
                </section>

                <section className="list">
                  <dl>
                    <dt>Cast</dt>
                    {infos.Actors &&
                      infos.Actors.map(item => <dd key={item}>{item}</dd>)}
                  </dl>
                  <dl>
                    <dt>Genre</dt>
                    {infos.Genre &&
                      infos.Genre.map(item => <dd key={item}>{item}</dd>)}
                  </dl>
                  <dl>
                    <dt>Director</dt>
                    {infos.Director &&
                      infos.Director.map(item => <dd key={item}>{item}</dd>)}
                  </dl>
                </section>
              </>
            )}
          </S.ContainerInfos>

          <S.Poster loading={loading ? 1 : 0}>
            {!loading && (
              <img src={infos.Poster} alt={`Poster - ${infos.Title}`} />
            )}
          </S.Poster>
        </>
      )}
    </S.Container>
  );
};

export default Movie;
