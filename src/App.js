import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
// import NotFound from './pages/NotFound';


function App() {
  return (
    <div>
      <div>
      <header className="movie-card-header">
        <div className="page-title">Movie Card Library CRUD</div>
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
        </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
