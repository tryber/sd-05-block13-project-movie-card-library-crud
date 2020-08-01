import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MovieDetails, MovieList, EditMovie, NewMovie, NotFound } from './pages/index';
>>>>>>> fe52c2c9c79a4576ba4d088829f9a3994a99514f

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div>Movie Card Library CRUD
          <Switch>
            <Route exact path="/" component={MovieList}>Lista de Filmes</Route>
            <Route path="/movies/:id" component={MovieDetails}>Detalhes do Filme</Route>
            <Route path="/movies/new" component={NewMovie}>Novo Filme</Route>
            <Route path="/movies/:id/edit" component={EditMovie}>Editar Filme</Route>
          </Switch>
      </div>
=======
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/new" component={NewMovie} />
        <Route component={NotFound} />
      </Switch>
>>>>>>> fe52c2c9c79a4576ba4d088829f9a3994a99514f
    </Router>
  );
}

export default App;
