import React from 'react';
import { FiHeart, FiHome } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

function BottomBar() {
  return (
    <Container>
      <NavLink to="/" exact data-testid="homeLink">
        <FiHome />
      </NavLink>
      <NavLink to="/favourites" exact data-testid="favouritesLink">
        <FiHeart />
      </NavLink>
    </Container>
  );
}

export default BottomBar;
