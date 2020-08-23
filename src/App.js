import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Router path="/" />
      <Router path="/movies/:id" />
      <Router path="/movies/new" />
      <Router path="/movies/:id/edit" />
    </BrowserRouter>
  );
}

export default App;
