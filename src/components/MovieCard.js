import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div className="card">
          <img src={imagePath} alt="Movie Cover" />
          <h4>{title}</h4>
          <p>{storyline}</p>
          <Link to={`/movies/:${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  id: PropTypes.number,
}

export default MovieCard;
