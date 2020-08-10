import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading, MovieCard } from '../components';


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
        <div style={{ display: 'flex', flexDirection: 'start' }} data-testid="movie-list" >
          {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
          <div>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </div>
        </div>
      );
    }
    return (
      <Loading />
    );
  }
}

export default MovieList;
