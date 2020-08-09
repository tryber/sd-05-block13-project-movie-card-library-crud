import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/movies/new" component={NewMovie} />
            <Route path="/movies/:id/edit" component={EditMovie} />
            <Route exact path="/movies/:id" component={MovieDetails} />
            <Route path="/:error" component={NotFound} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
