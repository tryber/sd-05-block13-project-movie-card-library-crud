import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      // subtitle,
      storyline,
      // rating,
      imagePath,
      // bookmarked,
    } = this.props.movie;
    this.style = {
      backgroundImage: `url(${imagePath})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: 'auto',
      height: '200px',
      color: 'white',
    };

    return (
      <div key={id} data-testid="movie-card">
        <div style={this.style}>{title}</div>
        {storyline}
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
