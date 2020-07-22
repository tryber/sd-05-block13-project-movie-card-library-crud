import React from 'react';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
      </BrowserRouter>
    </> 
  );
}

export default App;
