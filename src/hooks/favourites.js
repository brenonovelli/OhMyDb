import React, { createContext, useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const FavouriteContext = createContext();

const FavouritesProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const favourites = localStorage.getItem('@OhMyDB:favourites');

    if (favourites) {
      return JSON.parse(favourites);
    }

    return [];
  });

  const favoriteMovie = useCallback(
    (id, title) => {
      const isFavourite = data.filter(item => item.id === id).length;

      if (isFavourite === 0) {
        localStorage.setItem(
          '@OhMyDB:favourites',
          JSON.stringify([...data, { id, title }]),
        );
        setData([...data, { id, title }]);
      }

      if (isFavourite > 0) {
        const filteredList = data.filter(item => item.id !== id);

        localStorage.setItem(
          '@OhMyDB:favourites',
          JSON.stringify([...filteredList]),
        );

        setData([...filteredList]);
      }
    },
    [data],
  );

  const favouritesCount = () => (data.length > 99 ? '+99' : data.length);

  return (
    <FavouriteContext.Provider
      value={{
        favourites: data,
        favouritesCount: favouritesCount(),
        favoriteMovie,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

function useFavourites() {
  const context = useContext(FavouriteContext);

  if (!context) {
    throw new Error('useFavourites must be used within an FavouritesProvider');
  }

  return context;
}

export { FavouritesProvider, useFavourites };

FavouritesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
