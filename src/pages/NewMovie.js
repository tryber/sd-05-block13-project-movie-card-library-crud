import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';


const cleanMovie = {
  id: '',
  title: '',
  subtitle: '',
  storyline: '',
  rating: '',
  imagePath: '',
  bookmarked: '',
  genre: '',
};
class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(this.setState({ shouldRedirect: true }));
  }

  render() {
    const { shouldRedirect } = this.state;
    return shouldRedirect ? (
      <Redirect to="/" />
    ) : (
      <div data-testid="new-movie">
        <MovieForm movie={cleanMovie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
