import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
      <Link to="movies/:id">VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
