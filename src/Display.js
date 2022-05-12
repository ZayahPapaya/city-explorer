import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

class Display extends React.Component {
  render() {
    return (
      <>
      <ListGroup>
        {this.props.returnValue && <ListGroup.Item>City result: {this.props.returnValue.display_name}</ListGroup.Item>}
        {this.props.returnValue && <ListGroup.Item>Coordinates: {this.props.returnValue.lat}, {this.props.returnValue.lon}</ListGroup.Item>}
      </ListGroup>
      <Image src={this.props.mapValue}/>
      </>
    )
  }
}

export default Display;