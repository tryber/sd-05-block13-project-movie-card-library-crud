import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: {},
      failed: false
    }
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    if (movies) {
      this.setState({
        loading: false,
        movies: movies,
      });
    } else {
      this.setState({ failed: true })
    }
  }

  render() {
    const { movies } = this.state;
    if (this.state.failed) return <NotFound />
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
