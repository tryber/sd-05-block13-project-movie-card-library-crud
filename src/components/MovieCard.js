import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <div>{title}</div>
        <div>{storyline}</div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}
// Testa se os tipos estão corretos, serve para resolver o
// problema abaixo:
// 'movie.title' is missing in props validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
