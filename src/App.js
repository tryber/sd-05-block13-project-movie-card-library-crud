import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </header>
      <Switch>
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/new/" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
