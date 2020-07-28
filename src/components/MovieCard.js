import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h1>{subtitle}</h1>
        <h1>{storyline}</h1>
        <img src={imagePath} alt="filme"/>
      </div>
    );
  }
}

export default MovieCard;
