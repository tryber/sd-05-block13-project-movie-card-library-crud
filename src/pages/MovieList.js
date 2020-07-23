import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import movies from '../components/data';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieDetails from './MovieDetails';

class MovieList extends Component {
  constructor(props){
    super(props);
    this.state = { movies,
                  loading: true,
                }
  }

  componentDidMount(){
     setTimeout(() => {this.setState({movies, loading: false})}, 3000);

  }

  render() {
    const { movies, loading } = this.state;
    const id = this.props.match.params.id;
    if (id) return <MovieDetails id={id} movie={movies}/>;
    if (loading) return <Loading />
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <div>
            <MovieCard key={movie.id} movie={movie} />
            
            {/* acrescentei aqui em cima */}
          </div>))
        }
      </div>
    );
  }
}

export default MovieList;
