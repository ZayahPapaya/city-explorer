import Query from './Query';
import './App.css';
import React from 'react';
import axios from 'axios';
import Display from './Display';
import Error from './Error';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      returnValue: "",
      errorMessage: "",
    }
  }

  getData = async () => {
    try {
      const urlLocation = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchValue}&format=json`;
      const responseLocation = await axios.get(urlLocation);
      console.log("Response:", responseLocation.data[0]);
      this.setState({ returnValue: responseLocation.data[0], errorMessage: ""});
    } catch(error){
      this.handleError(error);
    }
  };

  handleError = (error) => {
    console.error(error);
    this.setState({ errorMessage: `Yikes: Status code ${error.response.status} ${error.response.data.error}`, returnValue: ""})
  }

  changeHandler = (e) => { this.setState({ searchValue: e.target.value }) };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to City Explorer</h1>
        </header>
        <Query changeHandler={this.changeHandler} getData={this.getData} />
        <Error errorMessage={this.state.errorMessage}/>
        <Display returnValue={this.state.returnValue} />
      </div>
    );
  }
}

export default App;
