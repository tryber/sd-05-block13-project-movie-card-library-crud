import React, { Component } from 'react';

import { Loading } from '../components';
import BrowserRoute, { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
      notFound: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
      .then((response) => {
        this.setState({
          isLoading: false,
          movie: response,
          id: response.id,
        });
      })
      .catch(() => this.setState({ isLoading: false, notFound: true }));
  }

  render() {
    // Change the condition to check the state
    const { isLoading, notFound, id } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    
    if (isLoading) return <Loading />
    if (notFound) return <Redirect to="/404-error" />

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button onClick={() => movieAPI.deleteMovie(id)}><Link to="/">DELETAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.object,
  isLoading: PropTypes.bool,
  notFound: PropTypes.bool,  
}

export default MovieDetails;
