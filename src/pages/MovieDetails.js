import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: '',
    }
  }

  componentDidMount() {
    const numId = this.props.match.params.id;
    movieAPI.getMovie(numId).then((response) => this.setState({ loading: false, movie: response }));
  }


  render() {
    const { movie, loading } = this.state;
    const { storyline, imagePath, genre, rating, subtitle } = movie;

    return loading ? <Loading /> :
    (
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

export default MovieDetails;
