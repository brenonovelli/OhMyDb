import React from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import AppProvider from './hooks';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Router history={history}>
      <HelmetProvider>
        <Helmet
          defaultTitle="OhMyDB - OMDb - The Open Movie Database"
          titleTemplate="%s | OhMyDB - The Open Movie Database"
        />
        <AppProvider>
          <Routes />
        </AppProvider>
      </HelmetProvider>

      <GlobalStyles />
    </Router>
  );
}

export default App;
