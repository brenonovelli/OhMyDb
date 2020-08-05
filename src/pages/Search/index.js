import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

import { FiAlertCircle, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

import BoxAlert from '../../components/BoxAlert';
import MovieItem from '../../components/MovieItem';
import SearchForm from '../../components/SearchForm';

import * as S from './styles';

const SearchPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(Array.from({ length: 10 }));
  const [totalMovies, setTotalMovies] = useState(0);
  const [errorResponse, setErrorResponse] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const history = useHistory();

  const { term, page } = match.params;

  const totalPages = useMemo(() => Math.ceil(totalMovies / 10), [totalMovies]);

  useEffect(() => {
    setCurrentPage(Number(page) || 1);
  }, [page]);

  useEffect(() => {
    (async function loadMovies() {
      setLoading(true);

      try {
        const response = await api.get(`&s=${term}&page=${page}`);

        const { Search, totalResults, Response } = response.data;

        if (Response !== 'False') {
          setMovies([...Search]);
          setTotalMovies(totalResults);
          setLoading(false);
        } else {
          const { Error } = response.data;

          setErrorResponse(Error);
        }
      } catch (err) {
        setErrorResponse('Something went wrong. Try again.');
      }

      setLoading(false);
    })();
  }, [term, page]);

  const previousPage = () => {
    setLoading(true);
    history.push(`/search/${term}/${Number(currentPage) - 1}`);
  };

  const nextPage = () => {
    setLoading(true);
    history.push(`/search/${term}/${Number(currentPage) + 1}`);
  };

  return (
    <S.Container>
      <Helmet>
        <title>{term || 'New search'} | Search</title>
      </Helmet>

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
                  Previous Page
                </button>
              )}
            </div>

            <div className="infos">
              Results: {totalMovies} | Page: {currentPage}/{totalPages}
            </div>

            <div>
              {currentPage !== totalPages && (
                <button type="button" onClick={nextPage}>
                  Next Page
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

SearchPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      term: PropTypes.string.isRequired,
      page: PropTypes.string,
    }),
  }).isRequired,
};
