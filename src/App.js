import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import Details from './pages/MovieDetails';
import Notfound from './pages/NotFound';

function App() {
  return (
    // #1 criando as rotas solicitadas
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>

      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={Details} />
        <Route path="/notfound" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
