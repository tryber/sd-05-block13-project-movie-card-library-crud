import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <p>Movie Card</p>
        <h3>{title}</h3>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard,
  (PropTypes = {
    movie: PropTypes.shape,
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  });

export default MovieCard;
