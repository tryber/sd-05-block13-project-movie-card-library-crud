/* https://pt.stackoverflow.com/questions
  /369892/como-redirecionar-para-uma-rota-usando-onclick-e-react-router */
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    // copiei do meu projeto Stateful
    const { movies } = this.props.movies;
    const { title, storyline, id } = movies;
    return (
      <div data-testid="movie-card">
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={`/movies/${id}`}> VER DETALHES</Link> 
        </div>
      </div>
    );
  }
}

export default MovieCard;
