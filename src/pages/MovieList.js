import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => {
      this.setState({
        isLoading: false,
        movies: response,
      });
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening
    
    return (
      <div data-testid="movie-list">
        {isLoading && <Loading />}
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
