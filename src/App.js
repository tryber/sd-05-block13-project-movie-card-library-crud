import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <div>
      <h1>Movie Card Library CRUD</h1>

      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/movies/:id/edit" component={EditMovie} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies/new" component={NewMovie} />
          </Switch>
        </Router>
      </main>

    </div>
  );
}

export default App;
