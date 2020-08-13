import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import MovieTitle from './movie.title';
import MovieDetails from './movie.details';

const MovieRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MovieTitle} exact />
      <Route path="/image" component={MovieDetails} />
    </Switch>
  </BrowserRouter>
)

export default MovieRouter