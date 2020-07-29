import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  // Construtor criando um movies vazio e mantendo o estado do loading como true uma vez
  // que nada foi carregado ainda.
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      loadingCheck: true,
    };
  }
  // A página que se encontra no loading então monta a sua dom,
  // e o componentdidmount dispara uma vez as instruções
  // No caso ele puxa a função getMovies da movieApi e preenche
  // a o objeto movies com a data recuperada, ao
  // fazer isso ele muda o estado do loading para false.
  componentDidMount() {
    movieAPI.getMovies()
    .then((data) => this.setState({
      movies: data,
      loadingCheck: false,
    }));
  }
  render() {
    const { movies, loadingCheck } = this.state;
    // Caso a condição do loading seja true (ou seja não carregou a dom ainda)
    // a renderização continua com a loading screen.
    if (loadingCheck) {
      return (<Loading />);
    }
    // Retorna uma div preenchendo com as datas carregadas
    // no didMount usando a construção no MovieCard
    // Adiciona o link para acrescentar um filme novo
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
