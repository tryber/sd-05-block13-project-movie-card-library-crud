import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      notFound: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
      .then((response) => {
        this.setState({
          loading: false,
          movie: response,
          id: response.id,
        });
      })
      .catch(() => this.setState({
        loading: false,
        notFound: true,
      }));
  }
  render() {
    // Change the condition to check the state
    const { loading, notFound, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    if (loading) return <Loading />;
    if (notFound) return <Redirect to="404-error" />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to={'/'}>VOLTAR</Link>
        <button onClick={() => movieAPI.deleteMovie(id)}><Link>DELETAR</Link></button>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
