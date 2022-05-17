import React from 'react';


class Weather extends React.Component {
    render() {
      return (
        <p>{this.props.weatherReport}</p>
      )
    }
  }

export default Weather;