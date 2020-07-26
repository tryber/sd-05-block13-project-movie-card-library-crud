import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

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
    const { storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    if (!this.state.isLoaded) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
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
