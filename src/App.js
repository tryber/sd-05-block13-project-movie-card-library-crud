import React from 'react';
import MovieList from './pages/MovieList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
      </Switch>
    </Router>
  )
}

export default App;
