import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.id = this.props.match.params.id;
  }

  async componentDidMount() {
    const response = await movieAPI.getMovie(this.id);
    this.updateState(response);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }
  updateState(rsp) {
    this.setState({
      movie: rsp,
    });
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    // {loggedIn ? <Redirect to="/profile" /> : <HomePage />}
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (this.state.movie.length === 0) {
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
// this.props.match.params.id;
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default EditMovie;
