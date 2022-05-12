import Query from './Query';
import './App.css';
import React from 'react';
import axios from 'axios';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      returnValue: "",
      mapValue: ""
    }
  }

  getData = async () => {
    const urlLocation = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchValue}&format=json`;
    const responseLocation = await axios.get(urlLocation);
    console.log("Response:", responseLocation.data[0]);
    this.setState({ returnValue: responseLocation.data[0] });
    console.log(responseLocation.data[0]);
    const urlMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${responseLocation.data[0].lat},${responseLocation.data[0].lon}&zoom=10`;
    this.setState({ mapValue: urlMap});
  };

  changeHandler = (e) => { this.setState({ searchValue: e.target.value }) };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to City Explorer</h1>
        </header>
        <Query changeHandler={this.changeHandler} getData={this.getData} />
        <Display returnValue={this.state.returnValue} mapValue={this.state.mapValue}/>
      </div>
    );
  }
}

export default App;
