import React from 'react';
import Card from 'react-bootstrap/Card';


class WeatherDay extends React.Component {
    render() {
      return (
        <Card>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Card.Text>Average Votes:{this.props.avgVotes}</Card.Text>
        <Card.Text>totalVotes={this.props.totalVotes}</Card.Text>
        <Card.Text>popularity={this.props.popularity}</Card.Text>
        <Card.Text>release={this.props.release} poster={this.props.poster}</Card.Text>
        <Card.Text>alt={this.props.title}</Card.Text>
        </Card>
      )
    }
  }

export default WeatherDay;