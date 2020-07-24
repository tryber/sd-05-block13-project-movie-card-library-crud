import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading, MovieForm } from '../components';
// import movies from '../components/data';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
      shouldRedirect: false,
      status: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie, loading: false }));
   
  }

  handleSubmit(newMovie) {
  const id = this.props.match.params.id;
  
    movieAPI.updateMovie(newMovie)
    .then((response) => this.setState({ shouldRedirect: true, status: response }));
    movieAPI.getMovie(id)
      .then((movie) => { this.setState({ movie, loading: false }); console.log(movie)});
  }

  
  render() {
    const { shouldRedirect, movie, loading , status} = this.state; // movieAPI; // acrescentei aqui
    const id = this.props.match.params.id;
    const path = this.props.location.pathname;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    // Change the condition to check the state
    if (loading) return <Loading />;
    if (path === `/movies/${id}/edit` && !status) return <MovieForm onSubmit={this.handleSubmit} movie={movie} />;
    if (shouldRedirect) return <Redirect to={`/movies/${id}`} />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        {/* <Route path={`/movies/${id}/edit`} render={ (props) => <MovieForm {...props}/> }/> */}
        <Link to="/">VOLTAR</Link>
        {/* // acrescentei aqui */}
      </div>
    );
  }
}

export default MovieDetails;
