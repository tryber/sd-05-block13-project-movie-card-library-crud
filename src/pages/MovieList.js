import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { NotFound } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.setState({
      movies: [],
      loading: true,
      error: false,
    });
  }

  componentDidMount() {
    movieAPI.getMovie()
      .then((movie) => this.setState({
        movies: movie,
        loading: false,
      }));
  }

  render() {
    const { movies } = this.state;

    if (this.state.loading) return <Loading />;
    if (this.state.error) return <NotFound />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
