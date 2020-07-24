import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id, imagePath } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <img src={imagePath} alt="Movie Card" />
        <h4>{storyline}</h4>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>

    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
