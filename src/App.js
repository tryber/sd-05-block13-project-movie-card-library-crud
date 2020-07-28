import React from 'react';
import { BrowserRouter, Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, EditMovie } from './pages';

function App() {
  return (
    <BrowserRouter>
      <h1>Movie Cards Library CRUD</h1>
      <Switch>
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/" component={MovieList} />
        <Route path="/movies/:id/edit" component={EditMovie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

