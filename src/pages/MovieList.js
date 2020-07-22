import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import NotFound from './NotFound';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: {},
      failed: false,
    };
    this.changeState = this.changeState.bind(this);
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    if (movies) {
      this.changeState(false, movies);
    } else {
      this.changeState(false, {}, true);
    }
  }

  changeState(loading, movies, failed) {
    this.setState({
      loading,
      movies,
      failed,
    });
  }

  render() {
    const { movies } = this.state;
    if (this.state.failed) return <NotFound />;
    if (this.state.loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
