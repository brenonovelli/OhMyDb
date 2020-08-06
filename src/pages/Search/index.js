import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { animateScroll } from 'react-scroll';

import { FiAlertCircle, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

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

  const history = useHistory();

  const { term, page } = useParams();

  const totalPages = useMemo(() => Math.ceil(totalMovies / 10), [totalMovies]);

  useEffect(() => {
    setCurrentPage(Number(page) || 1);
  }, [page]);

  const loadMovies = useCallback(async () => {
    setLoading(true);

    await animateScroll.scrollTo(0, {
      duration: 250,
    });

    try {
      const response = await api.get(`&s=${term}&page=${page}`);

      const { Search, totalResults, Response } = response.data;

      if (Response !== 'False') {
        setMovies([...Search]);
        setTotalMovies(totalResults);
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
  }, [term, page]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

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
