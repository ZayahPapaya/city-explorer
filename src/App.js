import './App.css';
import React from 'react';
import axios from 'axios';

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
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to City Explorer</h1>
        </header>
        <input onChange={(e) => this.setState({ searchValue: e.target.value })} placeholder={"search"} />
        <button onClick={this.getData}>Search</button>
        {this.state.returnValue && <h2>City result: {this.state.returnValue.display_name}</h2>}
        {this.state.returnValue && <p>Coordinates: {this.state.returnValue.lat}, {this.state.returnValue.lon}</p>}
      </div>
    );
  }
}

export default App;
