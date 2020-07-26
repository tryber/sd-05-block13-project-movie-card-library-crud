import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <Router>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/404-error" component={NotFound} />
      </Router>
    </div>
  );
}

export default App;
