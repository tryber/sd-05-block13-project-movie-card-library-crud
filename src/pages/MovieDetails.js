import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: {},
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((response) => {
      this.setState({
        isLoading: false,
        movie: response,
      });
    });
  }

  deleteMovie() {
    movieAPI.deleteMovie(this.props.match.params.id);
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    const {
      title,
      id,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`Title: ${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to={'/'} onClick={this.deleteMovie}>
          DELETAR
        </Link>
        <Link to={'/'}>VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
