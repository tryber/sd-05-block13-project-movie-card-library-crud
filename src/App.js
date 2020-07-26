import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, EditMovie, NewMovie } from './pages';

function App() {
  return (
    <Router>
      <h1>Movie Cards Library CRUD</h1>
      <Switch>
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />
        <Route exact path="/" component={MovieDetails} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
      </Switch>
    </Router>
  );
}




export default App;

