import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from "../components/Loading";

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: '',
    }
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => this.setState({ movies: response, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;


    return loading ? <Loading /> : (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      );
  }
}

export default MovieList;
