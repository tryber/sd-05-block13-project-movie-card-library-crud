import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      loaded: true,
    }
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) =>
      this.setState({
        movie,
        loaded: false,
      }));
  }



  render() {
    const { movie, loaded } = this.state;
    if (loaded) return <Loading />
          const { title, storyline, imagePath, genre, rating, subtitle } = movie;
         return (
           <div data-testid="movie-details">
             <img alt="Movie Cover" src={`../${imagePath}`} />
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
             <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
           </div>
         )
        }
      }

export default MovieDetails;
