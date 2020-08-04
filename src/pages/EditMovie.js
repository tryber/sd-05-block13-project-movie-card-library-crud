import React, { Component } from 'react';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
    .then((data) => this.setState({
      movie: data,
      status: false,
      id: data.id,
    }))
    .catch(() => this.setState({ status: false, notFound: true }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
    .then(() => this.setState({
      shouldRedirect: true,
    }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
