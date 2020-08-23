import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  // Inicialização do ciclo de vida. 
  constructor(props) {
    super(props);
    this.state = { filmes: [], load: true };
  }
  // Montagem do ciclo de vida.
  componentDidMount() {
    movieAPI.getMovies().then((filme) => this.setState({ filmes: filme, load: false }))
  }

  render() {
    const { filmes, load } = this.state;
    if (load) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {filmes.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
