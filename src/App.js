import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

export default function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <Router>
        <Switch>
          <Route exact path="/" component={MovieList} />
        </Switch>
      </Router>
    </div>
  );
}
