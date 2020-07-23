import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

const defaultMovie = {
  title: '',
  storyline: '',
  imagePath: '',
  genre: '',
  rating: 0,
  subtitle: '',
};

class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: Object.assign(defaultMovie),
      isLoading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    const mid = this.props.match.params.id;
    movieAPI.getMovie(mid)
      .then((movie) => {
        this.setState({ movie, isLoading: false });
      });
  }

  deleteMovie() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id)
      .then(() => {
        this.setState({ shouldRedirect: true });
      });
  }

  render() {
    const { isLoading, shouldRedirect } = this.state;
    if (isLoading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.props.match.params;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{title}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button onClick={() => { this.deleteMovie(); }}>DELETAR</button>
        <Link to={`${id || 1}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    isExact: propTypes.bool,
    params: propTypes.shape({ id: propTypes.string }),
    path: propTypes.string,
    url: propTypes.string,
  }).isRequired,
};

export default MovieDetails;
