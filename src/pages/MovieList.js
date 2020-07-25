import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      load: false,
    };
  }

  async componentDidMount() {
    await movieAPI.getMovies().then((movies) => this.setState({
      load: true,
      movies,
    }));
  }

  render() {
    const { movies, load } = this.state;

    if (!load) return <Loading />;

    return (
      <div><br /><Link className="linkClass-app" to="/movies/new">ADICIONAR CARTÃO</Link>
        <div className="movie-list" data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
