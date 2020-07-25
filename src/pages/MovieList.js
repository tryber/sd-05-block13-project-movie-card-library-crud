import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
    };
    this.updateState = this.updateState.bind(this);
  }

  async componentDidMount() {
    const data = await movieAPI.getMovies();
    this.updateState(data);
  }

  updateState(parametro) {
    this.setState({
      movies: parametro,
    });
  }

  render() {
    const { movies } = this.state;
    if (movies === '') return (<Loading />);

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <div className="movie-card">
          <div className="box">
            <div className="cartaoBotao">
              <Link to="/movies/new">ADICIONAR CARTÃO</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
