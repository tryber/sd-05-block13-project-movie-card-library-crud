import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
// import Loading from '../components/Loading';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoaded: false,
      shouldRedirect: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     isLoaded: true,
  //   });
  // }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
    .then(() => this.setState({
      shouldRedirect: true,
    }));
  }

  render() {

    const { isLoaded, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    // if (isLoaded) return <Loading />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
