import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.imagePath} alt={`Capa do filme ${this.props.movie.title}`} />
        <span>{this.props.movie.storyline}</span>
        <Link to={`movies/:${this.props.movie.id}`}> VER DETALHES </Link>
      </div>
    );
  }
}

export default MovieCard;
