import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      movieId: this.props.match.params.id,
    };
  }
  componentDidMount() {
    movieAPI.getMovie(this.state.movieId)
      .then((response) => {
        console.log(response)
        this.setState({
          isLoaded: true,
        })
        console.log(this.props.movie)
      });
  }
  
  render() {
    // Change the condition to check the state
    if (!this.state.isLoaded) return <Loading />;

    const { id, storyline, imagePath, genre, rating, subtitle } = this.props.movie;
    
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
