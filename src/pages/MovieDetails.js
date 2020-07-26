import React, { Component } from 'react';
import { Link, Redirect, Prompt } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import EditMovie from './EditMovie';
// import movies from '../components/data';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
      id: this.props.match.params.id,
      path: this.props.location.pathname,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { id } = this.state;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie, loading: false }));
  }

  handleSubmit(newMovie) {
    // const resposta = prompt('Você tem certeza que deseja apagar este  MovieCard?')
    // console.log(resposta)
   movieAPI.deleteMovie(newMovie)
   .then(() => this.setState({ shouldRedirect: true }))
  }

  render() {
    const { movie, loading, id, shouldRedirect } = this.state; // movieAPI; // acrescentei aqui
    const path = this.props.location.pathname;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    // Change the condition to check the state
    if (loading) return <Loading />;
    if (path === `/movies/${id}/edit`) {
      return <EditMovie  movie={movie} />;
    }

    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/" onClick={() => this.handleSubmit(id)}  >DELETAR</Link>

        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
