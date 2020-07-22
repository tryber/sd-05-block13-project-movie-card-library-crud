import React from 'react';
import {Link, Route} from 'react-router-dom'

import MovieDetails from '../pages/MovieDetails';


class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="image-cards" src={imagePath} alt={title} width="200px" height="100px" />
        <div className="movie-card-body">
          <h4 className="title-card">{title}</h4>
          <p className="storyline-card">{storyline}</p>
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
        <Route path={`/movies/${id}`} component={MovieDetails} />
      </div>
    );
  }
}

export default MovieCard;
