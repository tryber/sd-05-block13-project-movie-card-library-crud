import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD
          <Switch>
            <Route exact path="/" component={MovieList}>Lista de Filmes</Route>
            <Route path="/movies/:id" component={MovieDetails}>Detalhes do Filme</Route>
            <Route path="/movies/new" component={NewMovie}>Novo Filme</Route>
            <Route path="/movies/:id/edit" component={EditMovie}>Editar Filme</Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
