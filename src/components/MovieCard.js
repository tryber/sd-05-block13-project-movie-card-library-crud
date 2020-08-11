import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id, imagePath } = this.props.movie;
    return (
      <div className="movie-card-body">
        <div className="movie-card" data-testid="movie-card">
          <img className="movie-card-image" alt="Movie Cover" src={`${imagePath}`} />
          <h4 className="movie-card-title">{title}</h4>
          <p>{storyline}</p>
          <div className="movie-card-link">
            <Link className="linkClass" to={`/movies/${id}`}>VER DETALHES</Link>
          </div>
        </div>
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
