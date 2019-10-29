import React, { Component } from 'react';

export class Confirm extends Component {

  render() {
    return (
      <div>
        <button className="btn btn-danger">Exit</button>
        <button className="btn btn-success">Submit</button>
      </div>
    )
  }
}

export default Confirm
