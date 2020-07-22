import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div>
      <h1>Movie Card Library CRUD</h1>

      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={MovieList} />
          </Switch>
        </Router>
      </main>

    </div>
  );
}

export default App;
