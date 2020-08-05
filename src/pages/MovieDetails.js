import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, loading: true };
    this.deletar = this.deletar.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI
      .getMovie(id)
      .then((data) => this.setState({ movie: data, loading: false }));
  }

  deletar() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;
    // Change the condition to check the state
    if (loading) return <Loading />;

    // if (redirecionar) return <Redirect to={'/'} />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`Title: ${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={'/'} onClick={() => this.deletar()}>
          DELETAR
        </Link>
        <Link to={`/movies/${movie.id}/edit`}>EDITAR</Link>
        <Link to={'/'}>VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
};

export default MovieDetails;
