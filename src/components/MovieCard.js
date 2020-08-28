/* https://pt.stackoverflow.com/questions
  /369892/como-redirecionar-para-uma-rota-usando-onclick-e-react-router */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // copiei do meu projeto Stateful algumas coisas
    const { title, storyline, id } = this.props.movies;
    return (
      <div data-testid="movie-card">
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

// aprendi no projeto em grupo
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
