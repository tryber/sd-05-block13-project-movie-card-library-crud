import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/movies/new" component={NewMovie}
          />
          <Route
            exact path="/" component={MovieList}
          />
          <Route
            exact path="/movies/:id" render={(props) => <MovieDetails {...props} />}
          />
          <Route
            exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />}
          />
          <Route path="/:error" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
