import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({
      submitted: true,
    });
  }

  render() {
    const { submitted } = this.state;
    if (submitted) return <Redirect to="/" />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
