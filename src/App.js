import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
      </Switch>
    </Router>
  );
}

export default App;
