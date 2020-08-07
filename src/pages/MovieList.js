import * as movieAPI from 'services/movieAPI';
import { Loading, MovieCard } from 'components';
import React, { Component } from 'react';


class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: null,
    };
    movieAPI.getMovies().then((result) => this.setState({ movies: result }));
  }

  render() {
    const { movies } = this.state;
    if (movies !== null) {
      return (
        <div style={{ display: 'flex', flexDirection: 'start' }} >
          {movies.map((movie) => <MovieCard movie={movie} />)}
        </div>
      );
    }
    return (
      <Loading />
    );
  }
}

export default MovieList;
