import React from 'react';
import Button from 'react-bootstrap/Button';

class Query extends React.Component {
    render() {
      return (
        <>
        <input onChange={this.props.changeHandler} placeholder={"search"} />
        <Button onClick={this.props.getData}>Search</Button>
        </>
      )
    }
  }

export default Query;