import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends React.Component {
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
    return movies ? (
      <div>
        <Link to="/">
          <div data-testid="movie-list">
            {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          </div>
        </Link>
      </div>
    ) : (
      <div>
        <Loading />;
      </div>
    );
  }
}

export default MovieList;
