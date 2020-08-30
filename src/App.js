// participei do catch up do grupo da Renatinha, com Sid codando esse projeto
// fiquei com duvida no import ser do index, perguntei pro Sid e Kyle
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  MovieList,
  MovieDetails,
  EditMovie,
  NewMovie,
  NotFound,
} from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
