import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => {
      this.setState({ movies: response, isLoading: false });
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    if (isLoading) {
      return (
        <h1>Carregando...</h1>
      );
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
