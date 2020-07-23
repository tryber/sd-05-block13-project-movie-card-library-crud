import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      isLoaded: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => {
        // console.log(response);
        this.setState({
          movies: response,
          isLoaded: true,
        });
        // console.log(this.state.movies);
      });
  }

  render() {
    const { movies } = this.state;
    // console.log(movies)
    // Render Loading here if the request is still happening
    if (!this.state.isLoaded) return (<Loading />);
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
