import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieDetails, MovieList, EditMovie, NewMovie } from './pages/index';
import './App.css';
import PropTypes from 'prop-types';


function App() {
  return (
    <Router>
      <Switch>
        <Route component={NewMovie} />
        <Route component={EditMovie} />
        <Route component={MovieDetails} />
        <Route component={MovieList} />
        <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
