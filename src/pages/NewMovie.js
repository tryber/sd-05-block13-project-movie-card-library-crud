import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

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

/* NewMovie.PropTypes = {
  changePage: PropTypes.bool,
} */

export default NewMovie;
