import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { animateScroll } from 'react-scroll';

import { FiAlertCircle, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { useFetch } from '../../hooks/fecth';

import BoxAlert from '../../components/BoxAlert';
import MovieItem from '../../components/MovieItem';
import SearchForm from '../../components/SearchForm';

import * as S from './styles';
import BottomBar from '../../components/BottomBar';

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(Array.from({ length: 10 }));
  const [totalMovies, setTotalMovies] = useState(0);
  const [errorResponse, setErrorResponse] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { term, page } = useParams();
  const history = useHistory();

  const { data, error } = useFetch(`&s=${term}&page=${page}`);

  const totalPages = useMemo(() => Math.ceil(totalMovies / 10), [totalMovies]);

  useEffect(() => {
    setCurrentPage(Number(page) || 1);
  }, [page]);

  useEffect(() => {
    animateScroll.scrollTo(0, {
      duration: 250,
    });

    if (data) {
      const { Search, totalResults, Response } = data;

      if (Response !== 'False') {
        if (totalResults === '1') {
          history.push({
            pathname: `/movie/${Search[0].imdbID}`,
            state: {
              from: Search[0].imdbID,
            },
          });
          return;
        }

        setMovies([...Search]);
        setTotalMovies(totalResults);
        setErrorResponse(null);
        setLoading(false);
      } else {
        const { Error } = data;

        setErrorResponse(Error);

        setLoading(false);
      }
    }

    if (error) {
      setErrorResponse('Something went wrong.');

      setLoading(false);
    }
  }, [data, error, history]);

  const previousPage = () => {
    setLoading(true);
    history.push(`/search/${term}/${Number(currentPage) - 1}`);
  };

  const nextPage = () => {
    setLoading(true);
    history.push(`/search/${term}/${Number(currentPage) + 1}`);
  };

  return (
    <S.Container className="mainWrapper">
      <Helmet>
        <title>{term || 'New search'} | Search</title>
      </Helmet>

      <BottomBar />

      <SearchForm />

      {!errorResponse && (
        <>
          <S.ListMovies>
            {loading && movies.map(() => <MovieItem key={Math.random()} />)}

            {!loading &&
              totalMovies > 0 &&
              movies.map(item => <MovieItem key={item.imdbID} movie={item} />)}
          </S.ListMovies>

          <S.Pagination>
            <div>
              {currentPage > 1 && (
                <button type="button" onClick={previousPage}>
                  <FiArrowLeft />
                  Previous
                </button>
              )}
            </div>

            <div className="infos">
              {currentPage}/{totalPages}
              <small>({totalMovies} results)</small>
            </div>

            <div>
              {currentPage !== totalPages && (
                <button type="button" onClick={nextPage}>
                  Next
                  <FiArrowRight />
                </button>
              )}
            </div>
          </S.Pagination>
        </>
      )}

      {errorResponse && (
        <BoxAlert>
          <FiAlertCircle />
          <h3>{errorResponse}</h3>
          <span>Try again.</span>
        </BoxAlert>
      )}
    </S.Container>
  );
};

export default SearchPage;
