import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieDetails from '../pages/MovieDetails';
import MovieList from '../pages/MovieList';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <h3>{this.props.movie.title}</h3>
        <p>{this.props.movie.storyline}</p>
        <Link to={`/movies/${this.props.movie.id}`}>VER DETALHES</Link>
        <Switch>
          <Route exact path="/movies/:id" render={(props) => <MovieDetails  {...props} movie={this.props.movie} />} />
        </Switch>
        
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
