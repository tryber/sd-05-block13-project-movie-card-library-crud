import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.movieId = this.props.match.params.id;
  }

  componentDidMount() {
    movieAPI.getMovie(this.movieId)
      .then((movie) => {
        this.setState({ isLoading: false, movie });
      });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => {
        this.setState({ shouldRedirect: true });
      });
  }

  render() {
    if (this.state.isLoading) return (<Loading />);
    const { shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: propTypes.any.isRequired
};

export default EditMovie;
