import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Movie from '../pages/Movie';
import Favourites from '../pages/Favourites';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search/:term/:page?" component={Search} />
      <Route path="/movie/:id" component={Movie} />
      <Route path="/favourites" component={Favourites} />

      <Route path="/" component={Home} />
    </Switch>
  );
}
