import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

import Loading from '../components/Loading';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => {
        this.setState({
          movies: response,
          loading: true,
        });
      });
  }

  render() {
    const { loading } = this.state;
    if (!loading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
