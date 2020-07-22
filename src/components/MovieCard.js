import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { imagePath, title, storyline, id },
    } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} />
        <div>{title}</div>
        <div>{storyline}</div>
        <div>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
