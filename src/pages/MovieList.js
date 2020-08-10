import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: ''};
  }
  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({ movies }));
  }
  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return movies === '' ? ( <Loading /> ) : (<div data-testid="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
      <Link to="/movies/new">Adicionar Cartão</Link> 
    </div>
    );
  }
}

export default MovieList;
