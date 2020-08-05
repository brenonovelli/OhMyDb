import React from 'react';

import { FavouritesProvider } from './favourites';
// import { ToastProvider } from './toast';

const AppProvider = ({ children }) => (
  <FavouritesProvider>
    {/* <ToastProvider>{children}</ToastProvider> */}
    {children}
  </FavouritesProvider>
);

export default AppProvider;
