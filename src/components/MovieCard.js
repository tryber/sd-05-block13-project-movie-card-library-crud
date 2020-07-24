import React from 'react';
import { Link } from 'react-router-dom';
// import movies from '../services/movieData';
// import { getMovies } from '../services/movieAPI';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, storyline, id }, } = this.props;

    return (
      <div data-testid="movie-card">
        <image src={imagePath} alt={title} />
        <h2>{title}</h2>
        <p>{storyline}</p>
        <div>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  Movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
