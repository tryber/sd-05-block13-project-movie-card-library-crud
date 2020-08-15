import React from 'react';
import MovieDetails from './pages/MovieDetails';
import { Route } from 'react-router-dom';
import movieData from './services/movieData';
import movies from '../services/movieData';

class MovieCard extends React.Component {
  render() {
    // copiei do meu projeto Stateful
    const { movies } = this.props;
    const { title, subtitle, storyline, imagePath } = movies;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
      </div>
    );
  }
  /* return (
    <Route exact path="movies/:id" component={movieData} />
  ) */
}

export default MovieCard;
