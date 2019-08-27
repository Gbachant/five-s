import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          {title + "  "}
          <button onClick={this.props.updateLocation.bind(this, id, 'Present')} className="btn btn-success">Present</button>
          <button onClick={this.props.updateLocation.bind(this, id, 'Out of Place')} className="btn btn-warning">Out of Place</button>
          <button onClick={this.props.updateLocation.bind(this, id, 'Absent')}className="btn btn-danger">Absent</button>
          <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}>x</button>
        </p>
        <div>
          <div>
            <button onClick={this.props.addQuantity.bind(this, id, '1/5')} className="btn btn-info">1/5</button>
            <button onClick={this.props.addQuantity.bind(this, id, '2/5')} className="btn btn-info">2/5</button>
            <button className="btn btn-info">3/5</button>
            <button className="btn btn-info">4/5</button>
            <button className="btn btn-info">5/5</button>
            <button className="btn btn-info">Overstocked</button>
          </div>
          <div>
            <button className="btn btn-info">Stocked</button>
            <button className="btn btn-info">Empty</button>
          </div>
        </div>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  updateLocation: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
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

export default TodoItem
