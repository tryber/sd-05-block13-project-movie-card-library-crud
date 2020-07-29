import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
      notFound: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
      .then((movie) => {
        this.setState({ movie, isLoading: false });
      }).catch(() => this.setState({ isLoading: false, notFound: true }));
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    if (this.state.notFound) return <Redirect to="/404-error" />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    return (
      <div data-testid="movie-details">
        <p>{title}</p>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
