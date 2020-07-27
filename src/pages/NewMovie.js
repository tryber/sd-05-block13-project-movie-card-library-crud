import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// ---------------------------
// export const createMovie = (movieData) => {
//  let movies = readMovies();
//  const nextId = movies[movies.length - 1].id + 1;
//  const newMovie = { ...movieData, id: nextId };
//  movies = [...movies, newMovie];
//  saveMovies(movies);
//
//  return new Promise((resolve) => {
//    setTimeout(() => {
//      resolve('OK');
//    }, 1000);
//  });
// };
// ----------------------------

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => this.setState({ shouldRedirect: true }));
  }
  
  render() {
    if(this.state.shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewMovie;
