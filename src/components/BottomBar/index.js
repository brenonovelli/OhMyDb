import React from 'react';
import { FiHeart, FiHome } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useFavourites } from '../../hooks/favourites';

import { Container, Count } from './styles';

function BottomBar() {
  const { favouritesCount } = useFavourites();

  return (
    <Container>
      <NavLink to="/" exact data-testid="homeLink">
        <FiHome />
      </NavLink>
      <NavLink to="/favourites" exact data-testid="favouritesLink">
        <FiHeart />
        <Count>{favouritesCount}</Count>
      </NavLink>
    </Container>
  );
}

export default BottomBar;
