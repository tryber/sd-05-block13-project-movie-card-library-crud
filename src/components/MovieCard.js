import React from 'react';
import { link } from 'react-router-dom';
import PropTypes from 1prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id, imagePath } = this.props.movies;
    return (
      <div data-testid="movie-card">
        Movie Card
        <img src={imagePath} alt="Movie Cover" />
        <h1>{title}</h1>
        <p>{storyline}</p>
        <link to={`/movies/${id}`}>Ver Detalhes</link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
