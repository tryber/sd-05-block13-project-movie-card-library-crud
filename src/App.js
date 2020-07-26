import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <Router>
        {/* Switch */}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/404-error" component={NotFound} />
        {/* Switch */}
      </Router>
    </div>
  );
}

export default App;
