import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: {},
    };
    this.updateState = this.updateState.bind(this);
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.updateState({
      loading: false,
      movies,
    });
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    // Render Loading here if the request is still happening
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
