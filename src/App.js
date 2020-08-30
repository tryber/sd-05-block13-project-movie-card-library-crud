import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route path='/movies/:id/edit' component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
