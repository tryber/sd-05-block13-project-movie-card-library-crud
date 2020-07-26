import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUUD</div>
      <Switch>
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies" component={MovieList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
