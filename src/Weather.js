import React from 'react';
import WeatherDay from './WeatherDay'


class Weather extends React.Component {
    render() {
      return (
        <>
        {this.props.weatherReport &&
        <div>{this.props.weatherReport.map(value => (<WeatherDay dateTime={value.datetime} description={value.description}></WeatherDay>))}</div>
        }
        </>
      )
    }
  }

export default Weather;