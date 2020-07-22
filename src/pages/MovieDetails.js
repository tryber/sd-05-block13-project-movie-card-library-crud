import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  render() {
    const {loading} = this.state
    if (!loading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <section>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>

      </section>
    );
  }
}

export default MovieDetails;
