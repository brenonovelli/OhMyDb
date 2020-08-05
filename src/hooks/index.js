import React from 'react';
import PropTypes from 'prop-types';

import { FavouritesProvider } from './favourites';

const AppProvider = ({ children }) => (
  <FavouritesProvider>{children}</FavouritesProvider>
);

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
