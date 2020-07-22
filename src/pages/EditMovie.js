import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      shouldRedirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.id = this.props.match.params.id;

  }

 async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    })
  }

  async componentDidMount() {
    const response = await movieAPI.getMovie(this.id);
    this.setState({
      movie: response
    })
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    // {loggedIn ? <Redirect to="/profile" /> : <HomePage />}
    if (shouldRedirect) {
      // Redirect
      return <Redirect to='/' />
    }

    if (this.state.movie.length === 0) {
      // render Loading
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        {console.log(this.props.match.params.id)}
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;

// EditMovie: deve realizar uma requisição para buscar o filme que será editado.
// Ao ser montada, a página de edição do filme deve fazer uma requisição pra buscar o filme que será editado e deve, ao ter seu formulário submetido, artualizar o filme e redirecionar a página pra rota raíz.