import React from 'react';
import { Link } from 'react-router-dom';
// import movies from '../services/movieData';
// import { getMovies } from '../services/movieAPI';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const movie = this.props;
    return (
      <div data-testid="movie-card">
        <image src={movie.imagePath} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.storyline}</p>
        <div>
          <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
