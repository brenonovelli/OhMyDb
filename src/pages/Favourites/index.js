import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';
import { useFavourites } from '../../hooks/favourites';

import BottomBar from '../../components/BottomBar';

import { Container } from './styles';

function Favourites() {
  const { favoriteMovie, favourites } = useFavourites();

  const handleRemove = id => {
    favoriteMovie(id);
  };

  return (
    <Container className="mainWrapper">
      <BottomBar />

      <header>
        <h1>
          <FiHeart /> Your favourties movies
        </h1>
      </header>
      {favourites.map(item => (
        <article key={item}>
          <NavLink to={`/movie/${item.id}`}>{item.title}</NavLink>
          <button type="button" onClick={() => handleRemove(item.id)}>
            remove
          </button>
        </article>
      ))}
    </Container>
  );
}

export default Favourites;