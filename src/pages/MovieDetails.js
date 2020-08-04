import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link, Routes } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({ movies: data, loading: false }))
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movies;

    return (
      <div data-testid="movie-details">
        <img alt={title} src={`../${imagePath}`} />
        <h3>{`Title: ${title}`}</h3>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
