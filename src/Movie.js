import React from 'react';
import MovieMovie from './MovieMovie'


class Movie extends React.Component {
    render() {
      return (
        <>{this.props.movieReport &&
          <div>{this.props.movieReport.map(value => (<MovieMovie title={value.title} description={value.description} avgVotes={value.avgVotes} totalVotes={value.totalVotes} popularity={value.popularity} release={value.release} poster={value.poster} alt={value.title}></MovieMovie>))}</div>
        }
        </>
      )
    }
  }

export default Movie;