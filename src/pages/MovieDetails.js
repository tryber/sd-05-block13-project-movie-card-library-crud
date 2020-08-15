import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../src/components/Loading';
import movies from '../src/services/movieData';

class MovieDetails extends Component {
  render() {
    // Change the condition to check the state
    if (movies === '') return <Loading />;
    const { title, storyline, imagePath, genre, subtitle } = movies;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
