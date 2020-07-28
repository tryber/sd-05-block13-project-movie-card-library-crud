import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { MovieList, EditMovie, NewMovie, NotFound } from './pages/index';
import './App.css';
import PropTypes from 'prop-types';
import MovieList from './pages/MovieList'


function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        {/* <Route path="/" component={NewMovie} />
        <Route path="/" component={EditMovie} />
        <Route path="/" component={MovieDetails} />
        <Route path="/" component={NotFound} /> */}
        <Route path="/" component={MovieList} />
        </Switch>
    </Router>
  );
}

export default App;
