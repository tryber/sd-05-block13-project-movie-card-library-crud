import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

const defaultMovie = {
  title: '',
  storyline: '',
  imagePath: '',
  genre: '',
  rating: 0,
  subtitle: ''
}

class MovieDetails extends Component {

  constructor() {
    super();
    this.state = {
      movie: Object.assign(defaultMovie),
      isLoading: true
    };
  }

  componentDidMount() {
    const mid = this.props.match.params.id;
    movieAPI.getMovie(mid)
      .then((movie) => {
        this.setState({movie, isLoading: false});
      });
  }

  render() {
    if (this.state.isLoading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.props.match.params; 

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{title}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`${id || 1 }/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
