import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, subtitle, storyline, genre, rating } = this.props.movie
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{genre}</p>
        <p>{rating}</p>
      </div>
    );
  }
}

export default MovieCard;
