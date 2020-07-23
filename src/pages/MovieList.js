import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading'; 

class MovieList extends Component {
  constructor() {
    super()
      this.state = {
        movies: [],
        load: false
    }
  }

    async componentDidMount() {
    await movieAPI.getMovies().then((movies) => this.setState({
      load: true,
      movies,
    }));
  }

  render() {
    const { movies, load } = this.state;

    if (!load) return <Loading />

    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
