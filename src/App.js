import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <header>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </header>
      {/* ADICIONAR CARTÃO */}
      <Switch>
        <Route  exact path="/" component={MovieList}/>
        <Route  path="/movies/new" render={ (props) => <NewMovie {...props}/>}/>
        <Route  path="/movies/:id" component={MovieDetails}/>
        <Route  path="/movies/" render={ (props) => <MovieDetails {...props} />}></Route>
        <Route  path="/movies/:id/edit" component={EditMovie}/>        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
