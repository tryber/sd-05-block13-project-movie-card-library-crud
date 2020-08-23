import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieListner: [],
      loading: true,
    };
  }
  // montagem do ciclo de vida
  componentDidMount() {
    // mudança do state com o setState
    movieAPI
      .getMovies()
      .then((film) => this.setState({ movieListner: film, loading: false }));
  }
  render() {
    const { title, storyline, id } = this.props.movies;

    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
