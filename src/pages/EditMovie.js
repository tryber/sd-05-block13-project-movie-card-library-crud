import React, { Component } from 'react';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      isLoading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => this.setState({shouldRedirect: true}))
  }

  componentDidMount() {
    const { id } = this.props.match.params
     movieAPI.getMovie(id).then((movie) => this.setState({movie, isLoading: false}))
   }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/"/>
    }

    if(this.state.isLoading)
    return (
      <Loading />
    );

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
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
label: 'Avaliação', entrada: tag <input>, 
de tipo 'number' com valores que vão de 0 (mínimo)
a 5 (máximo), com um step de 0.1. */

export default EditMovie;
