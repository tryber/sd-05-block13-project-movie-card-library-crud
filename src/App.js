import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieDetails, MovieList, EditMovie, NewMovie, NotFound } from './pages/index';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/" component={MovieList} />
        <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
