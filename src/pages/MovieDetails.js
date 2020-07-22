import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import movies from '../services/movieData';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
    }
    this.id = this.props.match.params.id;
  } 
  
  async componentDidMount() {
    const response = await movieAPI.getMovie(this.id);
    this.update(response)
  }

  update(rsp) {
    this.setState({
      movie: rsp
    })
  }

  render() {
    // Change the condition to check the state
    if (this.state.movie.length === 0) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${this.id}/edit`}>EDITAR</Link>
        <Link to={'/'}>VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

// um link com o texto "EDITAR" apontando para a rota /movies/:id/edit e um link apontando para a rota raiz (/) com o texto "VOLTAR".