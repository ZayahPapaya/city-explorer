import React from 'react';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';

class MovieMovie extends React.Component {
    render() {
      return (
        <Col>
        <Card className="h-100 p-3 fw-bold">
        <Card.Title className="fw-bold fs-3">{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Card.Text>Average Score: {this.props.avgVotes}</Card.Text>
        <Card.Text>Total Score: {this.props.totalVotes}</Card.Text>
        <Card.Text>Rating: {this.props.popularity}</Card.Text>
        <Card.Text>Release Date: {this.props.release}</Card.Text>
        <Image src={this.props.poster} alt={this.props.title}/>
        </Card>
        </Col>
      )
    }
  }

export default MovieMovie;