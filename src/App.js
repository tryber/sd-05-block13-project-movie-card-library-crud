import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import Index from './pages/index';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <main>
        <Switch>
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" component={MovieList} />
        </Switch>
      </main>
      <footer>
        <h3>made with love by CD</h3>
      </footer>
    </Router>
  );
}

export default App;
