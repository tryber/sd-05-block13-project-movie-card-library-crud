import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import NotFound from './NotFound';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      redirect: false,
      failed: false
    }
    this.deleteMovie = this.deleteMovie.bind(this);
  }
  
  async deleteMovie() {
    await movieAPI.deleteMovie(this.state.movie.id);
    this.setState({ redirect: true });
  }
  
  async componentDidMount() {
    const movie = await movieAPI.getMovie(this.props.match.params.id);
    if (movie) {
      this.setState({
        loading: false,
        movie: movie,
      });
    } else {
      this.setState({ failed: true })
    }
  }

  render() {
    // Change the condition to check the state
    if (this.state.failed) return <NotFound />
    if (this.state.loading) return <Loading />;
    if (this.state.redirect) return <Redirect to="/" />

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={this.deleteMovie}>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
