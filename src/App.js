import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../src/pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/" component={MovieList} />
      </Switch>
    </Router>
  );
}

export default App;
