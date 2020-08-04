import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, loading: false };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI
      .getMovie(id)
      .then((data) => this.setState({ movie: data, loading: false }));
  }

  render() {
    const { loading, movie } = this.state;
    return <Loading />
    // Change the condition to check the state
    if (loading) return <Loading />;
    // const movie = {
    //   title: '',
    //   storyline: '',
    //   imagePath: '',
    //   genre: 'action',
    //   rating: 0,
    //   subtitle: '',
    // };
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`Title: ${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        {/* <Link to={`/movies/${movie.id}/edit`}>EDITAR</Link> */}
      </div>
    );
  }
}

export default MovieDetails;
