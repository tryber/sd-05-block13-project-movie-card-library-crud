import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  // iniciando ciclo de vida
  constructor(props) {
    super(props);
    this.state = {
      movieListner: [],
      loading: true,
    };
  }
  // montagem do ciclo de vida
  componentDidMount() {
    // mudança do state com o setState
    movieAPI
      .getMovies()
      .then((film) => this.setState({ movieListner: film, loading: false }));
  }
  render() {
    const { movieListner, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movieListner.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
