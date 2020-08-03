import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/:id/edit" component={EditMovie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
