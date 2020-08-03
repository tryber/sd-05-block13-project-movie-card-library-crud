import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/"></Route>
      <Route path="movies/:id"></Route>
      <Route path="movies/new"></Route>
      <Route path="movies/:id/edit"></Route>
    </Router>
  );
}

export default App;