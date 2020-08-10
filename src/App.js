import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:movieId" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="moveis/:id/edit" component={NewMovie} />
      </Switch>
    </Router>
  );
}

export default App;
