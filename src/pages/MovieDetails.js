import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(prosp) {
    super(props);
    this.state = { movie: '', loading: true };
    this.delete = this.delete.bind(this);
  }

  componenteDidMount() {
    const { id } = this.props.match.params;
    movieAPI
      .getMovie(id)
      .then((movie) => this.setState({ movie, loading: false }));
  }

  delete() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    if (loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`title: ${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}> Editar </Link>
        <Link to="/"> Voltar </Link>
        <Link to="/" onClick={() => this.delete()}>
          Deletar
        </Link>
      </div>
    );
  }
}

MovieDetails.PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
