import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" Component={MovieList} />
          <Route path="/movies/:id" Component={MovieDetails} />
          <Route path="/movies/new" Component={NewMovie} />
          <Route path="/movies/:id/edit" Component={EditMovie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
