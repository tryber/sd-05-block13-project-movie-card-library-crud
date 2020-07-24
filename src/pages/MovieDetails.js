import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      movie: '',
      isLoading: true,
    }
  }

  componentDidMount() {
    movieAPI.getMovie(this.state.id).then((response) => {
      this.setState({
        isLoading: false,
        movie: response,
      })
    })
  }

  render() {
    // Change the condition to check the state
    const { isLoading } = this.state;
    if (isLoading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`}>
        <p>{title}</p></img>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/:${id}/edit`}>EDITAR</Link>
        <Link to='/'>VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
