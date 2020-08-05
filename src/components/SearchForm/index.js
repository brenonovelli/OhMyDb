import React, { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

import history from '~/services/history';

import { Container, Form, Input } from './styles';

function SearchForm() {
  const inputRef = useRef(null);

  const handleSearch = e => {
    e.preventDefault();

    const term = inputRef.current.value;

    history.push(`/search/${term}/1`);
  };

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <FiSearch />

        <Input type="text" placeholder="Search movies" ref={inputRef} />
      </Form>
    </Container>
  );
}

export default SearchForm;
