import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import movies from '../services/movieData';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
    };
    this.delete = this.delete.bind(this);
    this.id = this.props.match.params.id;
  }

  async componentDidMount() {
    const response = await movieAPI.getMovie(this.id);
    this.update(response);
  }

  update(rsp) {
    this.setState({
      movie: rsp,
    });
  }

  delete() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    if (this.state.movie.length === 0) return <Loading />;

    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${this.id}/edit`}>EDITAR</Link>
        <button type="button" onClick={() => this.delete()}>
          <Link to="/">DELETAR</Link>
        </button>
        <Link to={'/'}>VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
