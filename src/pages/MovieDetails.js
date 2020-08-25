import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../src/components/Loading';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  render() {
    // Change the condition to check the state
    if (movies === '') return <Loading />;
    const { title, storyline, imagePath, genre, subtitle, rating } = movies;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating:${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
