import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import MovieDetails from './MovieDetails';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then(
      (movies) =>
        this.setState({
          movies,
          loading: false,
        }),
      (error) => {
        this.setState({
          loading: true,
          error,
        });
      },
    );
  }

  update(newData) {
    this.setState({
      movies: newData,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const id = this.props.match.params.id;
    if (id) return <MovieDetails id={id} />;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
        <Link to='/movies/new'> ADICIONAR CARTÃO </Link>
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.isRequired,
  }).isRequired,
};
