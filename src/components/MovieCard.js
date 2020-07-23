import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    console.log('props', this.props);
    console.log('props.movies', this.props.movie);
    const { id, title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={`../${imagePath}`} alt={title} className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <div className="detalhes">
            <Link to={`/movies/:${id}`}>Ver Detalhes</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
