import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
  <BrowserRouter>
  <div>Movie Card Library CRUD</div>
  <MovieList />
  <Switch>
    <Route to="/movies/:id" component={MovieDetails} />  
  </Switch>
  </BrowserRouter>
  );
}

export default App;
