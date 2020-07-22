import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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
  movieCardPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
   });
}


// shape is required
export default MovieCard;



//  alert.PropTypes = {
//   hideComponent: PropTypes.func,
//   contentTitle: PropTypes.string,
//   content: PropTypes.string,
//   children: PropTypes.object,
//   children: PropTypes.shape({
//     title: PropTypes.string,
//     content: PropTypes.string,
//     timeSeconds: PropTypes.number
//   })
