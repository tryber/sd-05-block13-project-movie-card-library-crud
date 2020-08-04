import React from 'react';
import { MovieDetails } from '../pages';
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie
    return (
      <div data-testid="movie-card">
        <p>Movie Card</p>
        <h3>{title}</h3>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
