import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div className="movie-card-title">{title}</div>
        <div className="movie-card-storyline">{storyline}</div>
        <div className="movie-card-footer">
          <Link to={`movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    storyline: propTypes.string,
  }).isRequired,
};

export default MovieCard;
