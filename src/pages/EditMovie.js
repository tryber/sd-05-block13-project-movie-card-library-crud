import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { MovieForm } from '../components';


class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.id = this.props.match.params.id;
  }
  componentDidMount() {
    movieAPI.getMovie(this.id)
    .then((movie) => this.setState({ movie, status: 'loaded' }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
    .then(() => {
      this.setState({
        shouldRedirect: true,
      });
    });
  }
  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <div>
          <Redirect to="/" />;
        </div>
      );
    }

    if (status === 'loading') {
      return (
        <div>
          <Loading />;
        </div>
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
