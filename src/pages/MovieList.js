import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
// import movies from '../services/movieData';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    movieAPI.getMovies()
    .then((resp) => this.setState(
      { movies: resp,
        isLoading: false,
      }));
  }
  render() {
    const { movies, isLoading } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {isLoading && <Loading />}
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
