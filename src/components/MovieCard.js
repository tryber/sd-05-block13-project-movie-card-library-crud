import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import movies from '../services/movieData';

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
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  body: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
  }).isRequired,
};
