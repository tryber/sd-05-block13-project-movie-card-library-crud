import React from 'react';
import { Link } from 'react-router-dom';
import movies from '../services/movieData';

class MovieCard extends React.Component {
  render() {
    const {
      body: { title, subtitle, storyline, imagePath, id },
    } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{storyline}</div>
        <img src={imagePath} alt={title} />
        <div>
          <Link to={`movies/${id}`}>VER DETALHES<Link/>
        </div>
      </div>
    );
  }
}

export default MovieCard;
