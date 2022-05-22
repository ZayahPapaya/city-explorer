import Query from './Query';
import './App.css';
import React from 'react';
import axios from 'axios';
import Display from './Display';
import Error from './Error';
import Weather from './Weather';
import Movie from './Movie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      returnValue: "",
      errorMessage: "",
      weatherReport: "",
      movieReport: "",
    }
  }
// DONE: This should query locationIQ and then pass the data to localserver, everything else handled in server
  getData = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchValue}&format=json`;
      const response = await axios.get(url);
      this.setState({ returnValue: response.data[0], errorMessage: "" }, this.summons);
    } catch (error) {
      this.setState({errorMessage: error.response.status + ': ' + error.response.data.error, returnValue: ""})
    };
  };
  summons = () => {
    this.getWeather();
    this.getMovies();
    // this.getPhotos();
  }
  getWeather = async () => {
    try {
      console.log('Trying to get weather');
      const url = process.env.REACT_APP_SERVER;
      const response = await axios.get(`${url}/weather?lat=${this.state.returnValue.lat}&lon=${this.state.returnValue.lon}`);
      this.setState({ weatherReport: response.data, errorMessage: ""});
    } catch (error) {
      this.setState({errorMessage: error.response.status + ': ' + error.response.data.error, weatherReport: ""})
    };
  };

  getMovies = async () => {
    try {
      console.log('Trying to get movies');
      const url = process.env.REACT_APP_SERVER;
      const response = await axios.get(`${url}/movie?search=${this.state.returnValue.display_name}`);
      this.setState({ movieReport: response.data.map(value => (<><p>{value.title}, {value.description}, {value.avgVotes}, {value.totalVotes}, {value.popularity}, {value.release}</p><img src={value.poster} alt={value.title}/></>))});
    } catch (error) {
      this.setState({errorMessage: error.response.status + ': ' + error.response.data.error, movieReport: ""})
    };
  };

  // getPhotos = async () => {
  //   try {
  //     const url = process.env.REACT_APP_MOVIE;
  //     const response = await axios.get(`${url}`)
  //   } catch (error) {
  //     this.handleError(error);
  //   };
  // };

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
        <Movie movieReport={this.state.movieReport} />
      </div>
    );
  }
}

export default App;
