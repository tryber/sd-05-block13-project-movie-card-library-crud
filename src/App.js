import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import movies from './services/movieData';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/new" render={(props) => <NewMovie {...props} />} />
          <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route exact path="/" render={(props) => <MovieList {...props} movies={movies} />} />
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/movies/new" render={(props) => <NewMovie {...props} />} />
          <Route path="/:error" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
