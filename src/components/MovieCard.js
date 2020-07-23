import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      title,
      imagePath,
      subtitle,
      storyline,
      genre,
      rating,
      id,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{genre}</p>
        <p>{rating}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  title : PropTypes.string,
  imagePath: PropTypes.string,
  subtitle : PropTypes.string,
  storyline: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.number
}