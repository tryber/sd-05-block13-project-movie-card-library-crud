import React from 'react';

import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, id } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
