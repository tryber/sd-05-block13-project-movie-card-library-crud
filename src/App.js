import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieList, NewMovie, MovieDetails, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
