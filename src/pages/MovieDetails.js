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
  }

  async componentDidMount() {
    const data = await movieAPI.getMovie(this.props.match.params.id.split(':')[1]);
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
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div className="botoes">
          <div className="editar">
            <Link to={`/movies/:${id}/edit`}>EDITAR</Link>
          </div>
          <div className="voltar">
            <Link to="/">VOLTAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.node.isRequired,
};
