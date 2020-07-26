import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
    .then((data) => this.setState({ movies: data }));
  }

  render() {
    const { movies } = this.state;
    if (movies === '') {
      return <Loading />;
    }
    return (
      <div>
        <Link to="/">
          <div data-testid="movie-list">
            {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          </div>
        </Link>
        <div>
          <Link to="/movies/new"><h1>ADICIONAR CARTÃO</h1></Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
