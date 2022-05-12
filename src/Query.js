import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Query extends React.Component {
    render() {
      return (
        <Form>
        <Form.Control onChange={this.props.changeHandler} placeholder={"search"} />
        <Button onClick={this.props.getData}>Search</Button>
        </Form>
      )
    }
  }

export default Query;