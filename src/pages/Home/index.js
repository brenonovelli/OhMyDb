/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import BoxAlert from '../../components/BoxAlert';
import artHome from '../../assets/art_blood.png';

import BottomBar from '../../components/BottomBar';
import SearchForm from '../../components/SearchForm';

const Home = () => (
  <div className="mainWrapper">
    <BottomBar />

    <SearchForm />

    <BoxAlert>
      <img src={artHome} alt="Don't know what to search?" />
      <h1>Don't know what to search?</h1>
      <span>Here's an offer you can't refuse</span>
    </BoxAlert>
  </div>
);

export default Home;
