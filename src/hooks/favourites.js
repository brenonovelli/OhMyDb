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
    idMovie => {
      const isFavourite = data.indexOf(idMovie);

      if (isFavourite === -1) {
        localStorage.setItem(
          '@OhMyDB:favourites',
          JSON.stringify([...data, idMovie]),
        );
        setData([...data, idMovie]);
      }

      if (isFavourite >= 0) {
        const filteredList = data.filter(item => item !== idMovie);

        localStorage.setItem(
          '@OhMyDB:favourites',
          JSON.stringify([...filteredList]),
        );

        setData([...filteredList]);
      }
    },
    [data],
  );

  return (
    <FavouriteContext.Provider value={{ favourites: data, favoriteMovie }}>
      {children}
    </FavouriteContext.Provider>
  );
};

function useFavourites() {
  const context = useContext(FavouriteContext);

  if (!context) {
    throw new Error('useTerm must be used within an FavouritesProvider');
  }

  return context;
}

export { FavouritesProvider, useFavourites };

FavouritesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
