import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  async componentDidMount() {
    const data = await movieAPI.getMovie(this.props.match.params.id);
    this.updateState(data);
  }

  updateState(parametro) {
    this.setState({
      movie: parametro,
    });
  }

  async deleteMovie() {
    await movieAPI.deleteMovie(this.props.match.params.id);
  }

  render() {
    // Change the condition to check the state
    if (this.state.movie === '') return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details" className="movie-card">
        <img alt="Movie Cover" src={`../${imagePath}`} className="movie-card-image" />
        <div className="movie-card-body">
          <p className="movie-card-title1">{`Subtitle: ${title}`}</p>
          <p className="movie-card-subtitle1">{`Subtitle: ${subtitle}`}</p>
          <p className="movie-card-storyline1">{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div className="botoes">
            <div className="voltar">
              <Link to="/">VOLTAR</Link>
            </div>
            <div className="editar">
              <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            </div>
            <div className="deletar">
              <Link to="/" onClick={this.deleteMovie}>DELETAR</Link>
            </div>
          </div>
        </div>
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
