import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class StationItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.station.completed ?
      'line-through' : 'none'
    }
  }

  getQuantityTypeButton(props) {
    if (this.props.station.quantityType === 'Boolean') {
      return <div className="boolean-quantity-buttons btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-info">
          <input type="radio" name="options" id="Stocked" autoComplete="off"/> Stocked
        </label>
        <label className="btn btn-info">
          <input type="radio" name="options" id="Empty" autoComplete="off"/> Empty
        </label>
      </div>;

    } if (this.props.station.quantityType === 'Integer') {
      return <div className="integer-quantity-buttons btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-info">
          <input type="radio" name="options" id="1/5" autoComplete="off"/> 0 - 20%
        </label>
        <label className="btn btn-info">
          <input type="radio" name="options" id="2/5" autoComplete="off"/> 20% - 40%
        </label>
        <label className="btn btn-info">
          <input type="radio" name="options" id="3/5" autoComplete="off"/> 40% - 60%
        </label>
        <label className="btn btn-info">
          <input type="radio" name="options" id="4/5" autoComplete="off"/> 60% - 80%
        </label>
        <label className="btn btn-info">
          <input type="radio" name="options" id="5/5" autoComplete="off"/> 80% - 100%
        </label>
        <label className="btn btn-info">
          <input type="radio" name="options" id="overstocked" autoComplete="off"/> Overstocked
        </label>
      </div>;
    }
  }

  render() {
    const {id, title} = this.props.station
    return (
      <div style={this.getStyle()} className="location-buttons btn-group btn-group-toggle" data-toggle="buttons">
        <div>
          <p>{title + "  "}</p>
          <label onClick={this.props.updateLocation.bind(this, id, 'Present')} className="btn btn-success">
            <input type="radio" name="options" id="present" autoComplete="off"/> Present
          </label>
          <label onClick={this.props.updateLocation.bind(this, id, 'Out of Place')} className="btn btn-warning">
            <input type="radio" name="options" id="out-of-place" autoComplete="off"/> Out of Place
          </label>
          <label onClick={this.props.updateLocation.bind(this, id, 'Absent')} className="btn btn-danger">
            <input type="radio" name="options" id="absent" autoComplete="off"/> Absent
          </label>
          <button onClick={this.props.delItem.bind(this, id)}style={btnStyle}>x</button>
          {this.getQuantityTypeButton(this)}
        </div>
      </div>
    )
  }
}

// PropTypes
StationItem.propTypes = {
  station: PropTypes.object.isRequired,
  updateLocation: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5x 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default StationItem
