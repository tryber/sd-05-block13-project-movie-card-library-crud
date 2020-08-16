   /* exemplo do site
    https://imasters.com.br/front-end/entendendo-estado-de-componentes-com-react-na-pratica */
import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
// import React from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: '' };
  }
  /*  dispara uma ou mais ações após o
   componente ser inserido no DOM (ideal para requisições)
   then retorna uma promisse
   setState: Ele irá disparar uma renderização extra,
    mas isto irá ocorrer antes que o browser atualize
    a tela. Isso garante que mesmo que o render() seja
    chamado duas vezes neste caso, o usuário não verá o state intermediário. */
  componentDidMount() {
    movieAPI.getMovies().then((data) => this.setState({ movies: data }));
  }

  render() {
    const { movies } = this.state;
    if (movies === '') {
      return <Loading />;
    }
    return(
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>;
    );
  }
}

export default MovieList;
