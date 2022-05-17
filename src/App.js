import Query from './Query';
import './App.css';
import React from 'react';
import axios from 'axios';
import Display from './Display';
import Error from './Error';
import Weather from './Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      returnValue: "",
      errorMessage: "",
      weatherReport: "",
    }
  }

  getData = async () => {
    try {
      const urlLocation = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchValue}&format=json`;
      const responseLocation = await axios.get(urlLocation);
      this.setState({ returnValue: responseLocation.data[0], errorMessage: "" });
      const urlWeather = process.env.REACT_APP_WEATHER;
      const weatherReport = await axios.get(`${urlWeather}/weather?type=${this.state.searchValue}`);
      this.setState({ weatherReport: weatherReport.data.weatherReport.map(day => (`Date: ${day.date} Forecast ${day.description}`)), errorMessage: "" })
    } catch (error) {
      this.handleError(error);
    }
  };

  handleError = (error) => {
    console.error(error);
    this.setState({ errorMessage: `Yikes: Status code ${error.response.status} ${error.response.data.error}`, returnValue: "" })
  }

  changeHandler = (e) => { this.setState({ searchValue: e.target.value }) };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to City Explorer</h1>
        </header>
        <Query changeHandler={this.changeHandler} getData={this.getData} />
        <Error errorMessage={this.state.errorMessage} />
        <Display returnValue={this.state.returnValue} />
        <Weather weatherReport={this.state.weatherReport} />
      </div>
    );
  }
}

export default App;
