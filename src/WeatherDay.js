import React from 'react';
import Col from 'react-bootstrap/Col';


class WeatherDay extends React.Component {
    render() {
      return (
        <Col>
        <div>Date: {this.props.dateTime} | Forecast: {this.props.description}</div>
        </Col>
      )
    }
  }

export default WeatherDay;