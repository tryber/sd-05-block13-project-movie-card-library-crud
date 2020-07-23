import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movies/new"
          component={NewMovie} />
        <Route exact path="/" component={MovieList}></Route>
        <Route exact path='/movies/:id'
          render={props => <MovieDetails {...props} />} />
        <Route exact path="/movies/:id/edit"
          render={props => <EditMovie {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
