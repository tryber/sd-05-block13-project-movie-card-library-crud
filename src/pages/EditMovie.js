import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
//  import MovieDetails from './MovieDetails';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { movie } = this.props;
    (this.setState({ movie, status: false }));
  }

  handleSubmit(newMovie) {
    movieAPI.updateMovie(newMovie);
    this.setState({ shouldRedirect: true, status: false });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    // if (shouldRedirect) return <Redirect to={`/movies/${movie.id}/edit`} ></Redirect>;
    if (status) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
