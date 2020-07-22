import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: '',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((response) => this.setState({ movie: response, status: false }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
     return <Redirect to="/"/>
    }

    if (status === 'loading') {
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
