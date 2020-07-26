import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     idProcurado: props.match.params.idProcurado,
  //   }
  // }

  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath, id } = movie;
    // const idProcurado = this.props.match.params.idProcurado;

    // if (idProcurado) return <h2>Olá Detalhes</h2>

    return (
      <div data-testid="movie-card">
        <div className="movie-card">
          <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
          <div className="movie-card-body">
            <h4 className="movie-card-title">{title}</h4>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
            <span className="rating">{rating}</span>
          </div>
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
