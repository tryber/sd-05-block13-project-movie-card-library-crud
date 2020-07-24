import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import './MovieDetais.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    };
    this.updateState = this.updateState.bind(this);
  }

  async componentDidMount() {
    const data = await movieAPI.getMovie(this.props.match.params.id);
    this.updateState(data);
  }

  updateState(parametro) {
    console.log('parametro', parametro);
    this.setState({
      movie: parametro,
    });
  }

  render() {
    // Change the condition to check the state
    if (this.state.movie === '') return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link><br />
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
