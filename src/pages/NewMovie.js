import React, { Component } from 'react';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
// import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { changePage: false };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
    .then(() => this.setState({ changePage: true }));
  }

  render() {
    if (this.state.changePage) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

/* label: 'Título', entrada: tag <input> de tipo 'text'
label: 'Subtítulo', entrada: tag <input> de tipo 'text'
label: 'Imagem', entrada: tag <input> de tipo 'text'
label: 'Sinopse', entrada: tag <textarea>
label: 'Gênero', entrada: tag <select>, com as seguintes opções:
<option value="action">Ação</option>
<option value="comedy">Comédia</option>
<option value="thriller">Suspense</option>
<option value="fantasy">Fantasia</option>
label: 'Avaliação', entrada: tag <input>, de tipo 'number'
com valores que vão de 0 (mínimo) a 5 (máximo), com um step de 0.1. */

export default NewMovie;
