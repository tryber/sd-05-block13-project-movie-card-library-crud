import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route exact path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route path="/404-error "component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
