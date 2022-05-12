import React from 'react';


class Display extends React.Component {
  render() {
    return (
      <>
        {this.props.returnValue && <h2>City result: {this.props.returnValue.display_name}</h2>}
        {this.props.returnValue && <p>Coordinates: {this.props.returnValue.lat}, {this.props.returnValue.lon}</p>}
      </>
    )
  }
}

export default Display;