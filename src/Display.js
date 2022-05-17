import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

class Display extends React.Component {
  render() {
    return (
      <>
      <ListGroup>
        {this.props.returnValue && (<><ListGroup.Item>City result: {this.props.returnValue.display_name}</ListGroup.Item> <ListGroup.Item>Coordinates: {this.props.returnValue.lat}, {this.props.returnValue.lon}</ListGroup.Item> <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.props.returnValue.lat},${this.props.returnValue.lon}&zoom=10`}/></>)}
      </ListGroup>
      </>
    )
  }
}

export default Display;