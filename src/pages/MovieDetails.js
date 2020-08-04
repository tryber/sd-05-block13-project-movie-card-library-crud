import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    movieAPI.getMovies(id).then((data) => this.setState({ movies: data, loading: false }));
  }

  render() {
    const {loading} = this.state
    // Change the condition to check the state
    if (loading) return <Loading />;
    const movie = {title: '', storyline: '', imagePath: '', genre: 'action', rating: 0, subtitle: ''}
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

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

export default MovieDetails;
