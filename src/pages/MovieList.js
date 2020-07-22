import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    this.setState({
      movies: movieAPI.getMovies(),
    });
  }

  render() {
    const { movies } = this.state;
    if (movies === '') return <Loading />;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
