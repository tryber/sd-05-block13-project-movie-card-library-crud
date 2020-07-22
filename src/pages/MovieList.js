import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
    };
  }

  async componentDidMount() {
    const data = await movieAPI.getMovies();
    this.setState({
      movies: data,
    });
  }

  render() {
    const { movies } = this.state;
    console.log(movies);
    if (movies === '') return (<Loading />);

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
