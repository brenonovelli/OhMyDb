import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Movie from '~/pages/Movie';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search/:term/:page?" component={Search} />
      <Route path="/movie/:id" component={Movie} />

      <Route path="/" component={Home} />
    </Switch>
  );
}
