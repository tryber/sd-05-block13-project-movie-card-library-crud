import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loaded: true,
    };
    this.apagar = this.apagar.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI
      .getMovie(id)
      .then((movie) => this.setState({ movie, loaded: false }));
  }

  apagar() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id);
  }


  render() {
    const { id, storyline, imagePath, genre, rating, subtitle, title } = this.state.movie;
    if (this.state.loaded) return <Loading />;
    return (
      <div data-testid="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={() => this.apagar()}>
          DELETAR
        </Link>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
