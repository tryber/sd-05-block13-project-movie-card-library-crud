import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import PropTypes from 'prop-types';
import NotFound from './NotFound';

class MovieDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: '',
      isLoading: true,
      movie: {},
      notFound: false,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((resp) => this.setState({
      movie: resp,
      isLoading: false,
    }));
  }
  
  render() {
    const { isLoading } = this.state;
      if(isLoading)
    return (
      <Loading />
    );
    if (this.state.movie !== undefined) {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p> 
        <p>{`Rating: ${rating}`}</p>
        <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
        <button><Link to="/">VOLTAR</Link></button>
        <button onClick={() => (movieAPI.deleteMovie(id))}><Link to="/">DELETAR</Link></button>
      </div>
    );
  }
  return <NotFound />;
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
