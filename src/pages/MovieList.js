import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
    .then((movie) => {
      this.setState({
        isLoading: false,
        movies: movie,
      });
    });
  }

  render() {
    const { movies } = this.state;

    if (this.state.isLoading) return (<Loading />);

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
