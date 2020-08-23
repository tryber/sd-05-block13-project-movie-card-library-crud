import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: [],
      notFound: false,
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((movie) =>
      this.setState({
        loading: false,
        movie: movie,
        notFound: true,
      }).catch(() => this.setState({ loading: false, notFound: true })),
    );
  }

  render() {
    // Change the condition to check the state
    const { movie } = this.props;

    if (this.state.loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <p>{`Title: ${title}`}</p>
        <button>
          <Link to="/movies/:id/edit">EDITAR</Link>
        </button>
        <button>
          <Link to="/">VOLTAR</Link>
        </button>
      </div>
    );
  }
}

export default MovieDetails;
