import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
    const id = parseInt(props.match.params.movieId, 10);
    movieAPI.getMovie(id).then((result) => this.setState(() => ({ movie: result })));
  }
  render() {
    // Change the condition to check the state
    if (this.state.movie === null) return (<Loading />);
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`} >EDITAR</Link>
        <Link to="/" onClick={() => movieAPI.deleteMovie(id)} >DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
