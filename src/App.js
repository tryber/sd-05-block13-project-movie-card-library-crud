import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id/edit"
          render={(props) => <EditMovie {...props} id={ids} />}
        />
        <Route path="/movies/new" component={NewMovie} />
        <Route
          path="/movies/:id"
          render={(props) => <MovieDetails {...props} id={ids} />}
        />
        <Route path="/:error" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
