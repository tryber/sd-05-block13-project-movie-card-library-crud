import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    };
    this.id = this.props.match.params.id;
  }
  componentDidMount() {
    movieAPI.getMovie(this.id)
    .then((movie) => this.setState({ movie }));
  }
  render() {
    const {
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
      title,
    } = this.state.movie;

    if (this.state.movie === '') {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`${id}/edit`}>EDITAR</Link>
        <Link to={'/'}>VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default MovieDetails;
