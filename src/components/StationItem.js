import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class StationItem extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  };

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
    const {id, title} = this.props.station
    if (this.props.station.quantityType === 'Boolean') {
      return <div className="boolean-quantity-buttons" data-toggle="buttons">
        <button className="btn btn-info" name="quantity" value="Stocked" onClick={() => { this.props.updateItem(title, 'quantity', 'Stocked')}}>
          <input type="radio" name="options" id="Stocked" autoComplete="off"/> Stocked
        </button>
        <button className="btn btn-info" name="quantity" value="Empty" onClick={() => { this.props.updateItem(title, 'quantity', 'Empty')}}>
          <input type="radio" name="options" id="Empty" autoComplete="off"/> Empty
        </button>
      </div>;

    } if (this.props.station.quantityType === 'Integer') {
      return <div className="integer-quantity-buttons" data-toggle="buttons">
        <button className="btn btn-info" name="quantity" value="1/5" onClick={() => { this.props.updateItem(title, 'quantity', '1/5')}}>
          <input type="radio" name="options" id="1/5" autoComplete="off"/> 0 - 20%
        </button>
        <button className="btn btn-info" name="quantity" value="2/5" onClick={() => { this.props.updateItem(title, 'quantity', '2/5')}}>
          <input type="radio" name="options" id="2/5" autoComplete="off"/> 20% - 40%
        </button>
        <button className="btn btn-info" name="quantity" value="3/5" onClick={() => { this.props.updateItem(title, 'quantity', '3/5')}}>
          <input type="radio" name="options" id="3/5" autoComplete="off"/> 40% - 60%
        </button>
        <button className="btn btn-info" name="quantity" value="4/5" onClick={() => { this.props.updateItem(title, 'quantity', '4/5')}}>
          <input type="radio" name="options" id="4/5" autoComplete="off"/> 60% - 80%
        </button>
        <button className="btn btn-info" name="quantity" value="5/5" onClick={() => { this.props.updateItem(title, 'quantity', '5/5')}}>
          <input type="radio" name="options" id="5/5" autoComplete="off"/> 80% - 100%
        </button>
        <button className="btn btn-info" name="quantity" value="Overstocked" onClick={() => { this.props.updateItem(title, 'quantity', 'Overstocked')}}>
          <input type="radio" name="options" id="overstocked" autoComplete="off"/> Overstocked
        </button>
      </div>;
    }
  }

  render() {
    const {id, title} = this.props.station
    return (
      <div style={this.getStyle()} className="location-buttons btn-group btn-group-toggle" data-toggle="buttons">
        <div>
          <p>{title + "  "}</p>
          <button className="btn btn-success" name="location" value="Present" onClick={() => { this.props.updateItem(title, 'location', 'Present')}}>
            <input type="radio" name="options" id="present" autoComplete="off"/> Present
          </button>
          <button className="btn btn-warning" name="location" value="Out of Place" onClick={() => {this.props.updateItem(title, 'location', 'Out of Place')}}>
            <input type="radio" name="options" id="out-of-place" autoComplete="off"/> Out of Place
          </button>
          <button className="btn btn-danger" name="location" value="Absent" onClick={() => {this.props.updateItem(title, 'location', 'Absent')}}>
            <input type="radio" name="options" id="absent" autoComplete="off"/> Absent
          </button>
          {this.getQuantityTypeButton(this)}
        </div>
      </div>
    )
  }
}

// PropTypes
StationItem.propTypes = {
  station: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired,
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
