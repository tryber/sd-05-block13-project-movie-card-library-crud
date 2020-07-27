import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((response) => {
        this.setState({
          movie: response,
          loading: false,
        });
      });
  }
  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    if (this.state.movie !== '') {
      return (
        <section>
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
          </div>
          <div>
            <Link to="/movies/:id/edit">EDITAR</Link>
            <Link to="/">Voltar</Link>
          </div>
        </section>
      );
      return null
    }
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default MovieDetails;
