import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { NotFound } from './pages';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
    <Router>
    <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
