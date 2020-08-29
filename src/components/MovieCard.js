import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating, id } = movie;
    return (
      <div data-testid="movie-card" className="card center movie-card" >
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={`/movies/${id}`} >VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
