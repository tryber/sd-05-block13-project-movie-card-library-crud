import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom'
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';

function App() {
  
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Route exact path='/' component={MovieList} />
      <Route exact path='/movies/:id/edit' />
      <Route exact path='/movies/:id' />
      <Route exact path='/movies/new' component={NewMovie} />
    </Router>
  );
}

export default App;
