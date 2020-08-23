import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
function App() {
  return (
    // #1 criando as rotas solicitadas
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
