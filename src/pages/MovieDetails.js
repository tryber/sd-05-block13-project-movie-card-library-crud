import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import NotFound from '../pages/NotFound';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {},
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({
        movies: movie,
        loading: false,
      }));
  }

  render() {
    const { movies, loading, error } = this.state;
    if (loading) return <Loading />;
    if (error) return <NotFound />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movies;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h4>{`Title: ${title}`}</h4>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
