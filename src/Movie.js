import React from 'react';
import MovieMovie from './MovieMovie'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


class Movie extends React.Component {
  render() {
    return (
      <>
      <Container>
        <Row sm={3} md={4} lg={5}>
          {this.props.movieReport &&
            <div>{this.props.movieReport.map(value => (<MovieMovie key={value.title} title={value.title} description={value.description} avgVotes={value.avgVotes} totalVotes={value.totalVotes} popularity={value.popularity} release={value.release} poster={value.poster} alt={value.title}></MovieMovie>))}</div>
          }
        </Row>
        </Container>
      </>
    )
  }
}

export default Movie;