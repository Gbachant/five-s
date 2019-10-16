import React, { Component } from 'react'

export class Violation extends Component {

  constructor(props) {
   super(props);
   this.state = {
     shineScore: 0,
     sortViolations: 0
    };

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

  render() {
    return (
      <div>
        <form>
          How many items are in the workspace that shouldn't be there?
          <input type="number" name="sortViolations" min="0" max="10" onChange={this.props.onChange} value={this.props.sortViolations}/>
        </form>
        <div className="cleanliness-buttons btn-group btn-group-toggle" data-toggle="buttons">
          <p>How clean is the station?</p>
          <button className="btn btn-info" name="shineScore" value="1/5" onClick={() => this.props.updateScores('shineScore', '1/5')}>
            <input type="radio"  id="clean-1/5" autoComplete="off"/> 1/5
          </button>
          <button className="btn btn-info" name="shineScore" value="2/5" onClick={() => this.props.updateScores('shineScore', '2/5')}>
            <input type="radio" id="clean-2/5" autoComplete="off"/> 2/5
          </button>
          <button className="btn btn-info" name="shineScore" value="3/5" onClick={() => this.props.updateScores('shineScore', '3/5')}>
            <input type="radio" id="clean-3/5" autoComplete="off"/> 3/5
          </button>
          <button className="btn btn-info" name="shineScore" value="4/5" onClick={() => this.props.updateScores('shineScore', '4/5')}>
            <input type="radio" id="clean-4/5" autoComplete="off"/> 4/5
          </button>
          <button className="btn btn-info" name="shineScore" value="5/5" onClick={() => this.props.updateScores('shineScore', '5/5')}>
            <input type="radio" id="clean-5/5" autoComplete="off"/> 5/5
          </button>
        </div>
      </div>
      )
    }
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

export default Violation
