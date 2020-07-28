import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
        <img src={imagePath} />
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
        <p>{rating}</p>
      </div>
    );
  }
}

export default MovieCard;
