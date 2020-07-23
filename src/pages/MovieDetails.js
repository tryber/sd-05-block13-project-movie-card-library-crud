import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';
import movies from '../components/data';

class MovieDetails extends Component {
  constructor(props){
    super(props);
    this.state ={
      movies,
      loading: true,
    }
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    const filme = movies[id - 1];
    setTimeout(() => {this.setState({movie: filme , loading: false})}, 2000);
  }

  render() {
    const { movie, loading} = this.state; // movieAPI; // acrescentei aqui

    // Change the condition to check the state
    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        {/* <Link to={`/movies/:id/edit${''}`}>Mais Detalhes</Link>  */}
        {/* // acrescentei aqui */}
      </div>
    );
  }
}

export default MovieDetails;
