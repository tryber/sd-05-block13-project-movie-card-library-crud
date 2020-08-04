import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {movie: [], shouldRedirect: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  componentDidMount() {
    const {id} = this.props.match.params;
    movieAPI.getMovies(id).then((data) => this.setState({ movies: data }));
  }
  
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => this.setState({shouldRedirect: true}))
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      <Redirect to='/' />
      // Redirect
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
