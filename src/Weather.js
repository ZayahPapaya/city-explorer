import React from 'react';


class Weather extends React.Component {
    render() {
      return (
        <div>{this.props.weatherReport}</div>
      )
    }
  }

export default Weather;