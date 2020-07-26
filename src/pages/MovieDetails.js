import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      movieId: this.props.match.params.id,
      movie: '',
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.state.movieId)
      .then((response) => {
        this.setState({
          isLoaded: true,
          movie: response,
        });
      });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    if (!this.state.isLoaded) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${this.state.movieId}/edit`}>EDITAR</Link>
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
