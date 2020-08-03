import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
// import PropTypes from 'prop-types';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({ movies, isLoading: false }));
  }

  render() {
    const { movies, isLoading } = this.state;
    /* if (this.state.isLoading) {
      return (
      <Loading />
    }); */
    return (
      <div data-testid="movie-list" className="mainContain">
        {isLoading && <Loading />}
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)};
      </div>
    );
  }
}

export default MovieList;
