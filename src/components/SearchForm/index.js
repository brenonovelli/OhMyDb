import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

import { Container, Form, Input } from './styles';

const SearchForm = () => {
  const inputRef = useRef(null);

  const history = useHistory();

  const handleSearch = e => {
    e.preventDefault();

    const term = inputRef.current.value;

    history.push(`/search/${term}/1`);
  };

  return (
    <Container>
      <Form onSubmit={handleSearch} data-testid="searchForm">
        <FiSearch />

        <Input
          type="text"
          placeholder="Search movies"
          ref={inputRef}
          data-testid="searchInput"
        />
      </Form>
    </Container>
  );
};

export default SearchForm;
