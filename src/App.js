import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from '../src/pages/MovieList';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/:id/edit" component="" />
        <Route path="/movies/new" component="" />
        <Route path="/movies/:id" component="" />
        <Route path="/" component={MovieList} />
      </Switch>
    </Router>
  );
}

export default App;
