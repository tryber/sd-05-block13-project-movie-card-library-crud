import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';
import Loading from './Loading';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <div>{title}</div>
        <div>{storyline}</div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
        <Switch>
          <Route path="/movies/1" component={Loading} />
        </Switch>
      </div>
      
    );
  }
}

export default MovieCard;
