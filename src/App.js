// participei do catch up do grupo da Renatinha, com Sid codando esse projeto
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={MovieDetails} />
    </BrowserRouter>
  );
}

export default App;
