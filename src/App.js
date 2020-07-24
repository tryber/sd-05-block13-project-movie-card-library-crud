import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, EditMovie, NewMovie } from './pages';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />  
      </Switch>
    </Router>
  );
}

export default App;
