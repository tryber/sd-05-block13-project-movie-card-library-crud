import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import NotFound from '../pages/NotFound';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {},
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({
        movies: movie,
        loading: false,
      }));
  }

  render() {
    const { movies, loading, error } = this.state;
    if (loading) return <Loading />;
    if (error) return <NotFound />;

    const { imagePath, title, subtitle, storyline, genre, rating, id } = movies;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h4>{`Title: ${title}`}</h4>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link><br />
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
