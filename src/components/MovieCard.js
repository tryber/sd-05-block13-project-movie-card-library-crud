import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div className="card">
          <img src={imagePath} alt='Movie Cover' />
          <h4>{title}</h4>
          <p>{storyline}</p>
          <Link to='/movies/:id'>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
