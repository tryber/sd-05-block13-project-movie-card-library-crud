import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((films) => this.setState({ movies: films, isLoading: false }));
  }

  render() {
    const { movies } = this.state;
    if (this.state.isLoading) {
      return <Loading />;
    }

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
