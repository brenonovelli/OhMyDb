import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Routes from './routes';

import AppProvider from './hooks';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Router>
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
