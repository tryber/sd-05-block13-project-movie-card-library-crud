import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: '',
      isLoading: true,
    }
  }

  componentDidMount() {
   const { id } = this.props.match.params
    movieAPI.getMovie(id).then((movie) => this.setState({movie, isLoading: false}))
  }
  render() {
    const { movie } = this.state;
      if(this.state.isLoading)
    return (
      <Loading />
    );
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link><br/>
        <Link to={`/`}>VOLTAR</Link>
      </div>
  );
  }
}

export default MovieDetails;
