import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
}
