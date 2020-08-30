import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

const novoMovie = {
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
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(novoMovie) {
    movieAPI.createMovie(novoMovie).then(
      this.setState({
        redirect: true,
      }));
  }

  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm movie={novoMovie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
