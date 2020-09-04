import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    let oFilme;
    if (this.props.movie) {
      const { title, storyline, id } = this.props.movie;
      return (
        <div data-testid="movie-card">
          <h1>{title}</h1>
          <p>{storyline}</p>
          <Link to={`movies/${id}`}>VER DETALHES</Link>
        </div>
      );
    }
    return <h1>sem movie </h1>;
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
