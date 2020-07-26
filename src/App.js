import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUUD</div>
      <Switch>
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route path="/movies" component={MovieList} />
        <Route exact path="/" component={MovieList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
