import React from 'react';
import {
  BrowserRouter, Route,
} from 'react-router-dom';
// import "./App.css";

import { MovieList, NotFound, MovieDetails, NewMovie, EditMovie } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route path="movies/:id/edit" component={EditMovie} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route exact path="/" component={MovieList} />
      <Route component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
