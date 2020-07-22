import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath, } = movie;
    return (
      <div data-testid="movie-card">
        <div className="superior">
          <img src={imagePath} alt={title} />
          <div className="titulo">
            {title}
          </div>
        </div>
        <div className="inferior">
          <div className="sinopse">
            {storyline}
          </div>
          <div className="detalhes">
            <Link to="/movies/:id">Ver Detalhes</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
