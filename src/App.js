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
      returnValue: ""
    }
  }

  getData = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchValue}&format=json`;
    const response = await axios.get(url);
    console.log("Response:", response.data[0]);
    this.setState({ returnValue: response.data[0] });
  };

  changeHandler = (e) => { this.setState({ searchValue: e.target.value }) };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to City Explorer</h1>
        </header>
        <Query changeHandler={this.changeHandler} getData={this.getData} />
        <Display returnValue={this.state.returnValue} />
      </div>
    );
  }
}

export default App;
