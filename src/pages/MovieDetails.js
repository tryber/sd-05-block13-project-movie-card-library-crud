import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    console.log(this);
    const { id } = this.props.match.params;
    movieAPI
      .getMovie(id)
      .then((movie) => {
        console.log(movie);
        this.setState({
          loading: false,
          movie,
        });
      })
      .catch(() => this.setState({ loading: false, notFound: true }));
  }

  render() {
    console.log(this);
    // Change the condition to check the state
    const { movie } = this.state;

    if (this.state.loading) {
      return <Loading />;
    }

    if (movie) {
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
    return <h1>Deu Ruim no final</h1>;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }),
};

export default MovieDetails;
