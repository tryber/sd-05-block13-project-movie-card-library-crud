import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NotFound from './NotFound';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notFound: false,
      isLoading: true,
      movie: {},
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((resp) =>
    this.setState(
      {
        movie: resp,
        isLoading: false,
      }))
    .catch(() => this.setState(
      {
        notFound: true,
        isLoading: false,
        movie: {},
      }));
  }
  render() {
    // Change the condition to check the state
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    /* if(notFound)
        return <NotFound />
      // Gambiarra para funcionar if this.state.movie != undefined
    */
    if (this.state.movie !== undefined) {
      const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
      return (
        <div data-testid="movie-details">
          <h2>{title}</h2>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
          <button><Link to="/">VOLTAR</Link></button>
          <button onClick={() => (movieAPI.deleteMovie(id))}><Link to="/">DELETAR</Link></button>
        </div>
      );
    }
    return <NotFound />;
  /* Pq nao rolou <Redirection to ="movies/404-error">? */
  }
}

export default MovieDetails;
