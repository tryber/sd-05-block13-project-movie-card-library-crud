   /* exemplo do site
    https://imasters.com.br/front-end/entendendo-estado-de-componentes-com-react-na-pratica */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
// import React from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: undefined,
      loading: true,
    };
    this.deletar = this.deletar.bind(this);
  }
  /*  dispara uma ou mais ações após o
   componente ser inserido no DOM (ideal para requisições)
   then retorna uma promisse
   setState: Ele irá disparar uma renderização extra,
    mas isto irá ocorrer antes que o browser atualize
    a tela. Isso garante que mesmo que o render() seja
    chamado duas vezes neste caso, o usuário não verá o state intermediário. */
  componentDidMount() {
    movieAPI.getMovies().then((data) => this.setState({ movies: data, loading: false }));
  }
  
  deletar() {
    const { id } = this.state.movies;
    movieAPI.deleteMovie(id);
  }
  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to={'/movies/new'}>ADICIONAR CARTÃO</Link>
        <Link to={'/'} onClick={() => this.deletar()}>APAGAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
