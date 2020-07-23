import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <h3>{this.props.movie.title}</h3>
        <p>Sinopse: {this.props.movie.storyline}</p>
        <Link to={`/movies/${this.props.movie.id}`}>VER DETALHES</Link>
        {/* <Route path="/movies/:id" component={} /> */}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })
};

// MovieCard.defaultProp = {
//   title: 'Título',
//   storyline: 'Sinopse',
//   id: 'ID',
// };

export default MovieCard;
