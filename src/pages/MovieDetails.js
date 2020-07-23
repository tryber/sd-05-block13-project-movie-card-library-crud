import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './MovieDetails.css'
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      load: true
    }

  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) =>    
      this.setState({
        movie,
        load: false
    }))
  }

  render() {
    const { movie, load } = this.state

    if (load) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div className="movie-card-body-d">
        <div className="movie-card-d" data-testid="movie-details">
          <img className="movie-card-image-d" alt="Movie Cover" src={`../${imagePath}`} />
          <h4 className="movie-card-title-d">{`Title: ${title}`}</h4>
          <p className="movie-card-subtitle-d">{`Subtitle: ${subtitle}`}</p>
          <p className="movie-card-storyline-d">{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <div className="movie-card-rating-d">
            <p className="rating-d">{`Rating: ${rating}`}</p>
          </div>
          <div className="movie-card-link-d">
            <Link className="linkClass-d" to="/movies/:id/edit">EDITAR</Link>
            <Link className="linkClass-d" to="/">VOLTAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
