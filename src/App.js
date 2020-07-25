import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MovieDetails, MovieList, EditMovie, NewMovie, NotFound } from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/new" component={NewMovie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
