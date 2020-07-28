import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound} from './pages';

function App() {
  return (
    <BrowserRouter>
      <h1>Movie Cards Library CRUD</h1>
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/" component={MovieList} />
        <Route path="/404-error" component={NotFound} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

