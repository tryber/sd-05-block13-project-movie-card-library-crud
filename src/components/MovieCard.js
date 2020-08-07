import React from 'react';
import Rating from './Rating';
import './movie-card.css';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <div data-testid="movie-card" className="card center movie-card" >
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
}
export default MovieCard;
