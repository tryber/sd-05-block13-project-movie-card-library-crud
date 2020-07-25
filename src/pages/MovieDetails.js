import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
      shouldRedirect: false,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    // pegar getMovie e colocar id - trabalhar com match
    const id = this.props.match.params.id;
    movieAPI.getMovie(id)
    .then((mov) => this.setState({
      movie: mov,
      isLoading: false,
    }));
  }

  deleteMovie() {
    const idMovie = this.state.movie.id;
    movieAPI.deleteMovie(idMovie);
    this.setState ({ shouldRedirect: true });
  }

  render() {
    // Change the condition to check the state
    const { movie, isLoading, shouldRedirect } = this.state;
    if (isLoading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link><br />
        <Link to="/">VOLTAR</Link><br />
        <Link to="/" onClick={this.deleteMovie}>DELETAR esse filme</Link>
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
