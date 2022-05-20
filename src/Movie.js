import React from 'react';


class Movie extends React.Component {
    render() {
      return (
        <div>{this.props.movieReport}</div>
      )
    }
  }

export default Movie;