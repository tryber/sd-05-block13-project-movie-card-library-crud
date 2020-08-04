import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: [], shouldRedirect: false, status: 'loading' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI
      .getMovie(id)
      .then((data) => this.setState({ movie: data, status: 'ehnoix' }));
  }

  handleSubmit(updatedMovie) {
    movieAPI
      .updateMovie(updatedMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
