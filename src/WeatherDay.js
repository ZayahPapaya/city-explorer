import React from 'react';


class WeatherDay extends React.Component {
    render() {
      return (
        
        <div>Date: {this.props.dateTime} | Forecast: {this.props.description}</div>
      )
    }
  }

export default WeatherDay;