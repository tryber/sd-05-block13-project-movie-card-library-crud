import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import NewMovie from './NewMovie';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => this.setState({ movies: data }));
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return <Loading />;
    }

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
          ))}
          <Link path={'/movies/new'} component={NewMovie}>ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
