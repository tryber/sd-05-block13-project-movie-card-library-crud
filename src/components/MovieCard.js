import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div className="movie-card-title">{title}</div>
        <div className="movie-card-storyline">{storyline}</div>
        <div className="movie-card-footer">
          <Link to={`movies/${id}`}>Ver Detalhes</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
