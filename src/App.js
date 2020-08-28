// participei do catch up do grupo da Renatinha, com Sid codando esse projeto
// fiquei com duvida no import ser do index, perguntei pro Sid
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
      <Route path="/" component={MovieDetails} />
      <Route path="/movielist" component={MovieList} />
      <Route path="/newmovie" component={NewMovie} />
      <Route path="/notfound" component={NotFound} />
      <Route path="/edit" component={EditMovie} />
    </BrowserRouter>
  );
}

export default App;
