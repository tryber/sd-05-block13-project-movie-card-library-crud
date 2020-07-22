import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline, id } } = this.props;

    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <img src={imagePath} alt={`Capa do filme ${title}`} />
        <span>{storyline}</span>
        <Link to={`/movies/:${id}`}> VER DETALHES </Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
  }).isRequired,
};
