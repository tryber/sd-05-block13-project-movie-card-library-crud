import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({ isLoading: true });
    movieAPI.createMovie(newMovie)
      .then(() => {
        this.setState({
          isLoading: false,
          shouldRedirect: true,
        });
      });
  }

  render() {
    const { isLoading, shouldRedirect } = this.state;
    if (isLoading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
