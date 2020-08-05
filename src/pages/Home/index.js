/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import BoxAlert from '~/components/BoxAlert';
import artHome from '~/assets/art_blood.png';

import SearchForm from '~/components/SearchForm';
import { Container } from '../Search/styles';

const Home = () => (
  <Container>
    <SearchForm />
    <BoxAlert>
      <img src={artHome} alt="Don't know what to search?" />
      <h1>Don't know what to search?</h1>
      <span>Here's an offer you can't refuse</span>
    </BoxAlert>
  </Container>
);

export default Home;
