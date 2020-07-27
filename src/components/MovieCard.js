import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {

  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div data-testid='movie-card' className='movie-card'>
        <img alt='Movie Cover' className='movie-card-image' src={imagePath}/>
        <div className='movie-card-body'>
          <h4 className='movie-card-title'>{title}</h4>
          <p className='movie-card-storyline'>{storyline}</p>
        </div>
        <div>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};
