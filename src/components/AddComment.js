import React, { Component } from 'react'

export class AddComment extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state.title);
    this.setState({title: ''})
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form>
          How many items are in the workspace that shouldn't be there?
          <input type="number" name="quantity" min="0" max="10"/>
        </form>
        <div className="cleanliness-buttons btn-group btn-group-toggle" data-toggle="buttons">
          <p>How clean is the station?</p>
          <label className="btn btn-info">
            <input type="radio" name="options" id="clean-1/5" autoComplete="off"/> 1/5
          </label>
          <label className="btn btn-info">
            <input type="radio" name="options" id="clean-2/5" autoComplete="off"/> 2/5
          </label>
          <label className="btn btn-info">
            <input type="radio" name="options" id="clean-3/5" autoComplete="off"/> 3/5
          </label>
          <label className="btn btn-info">
            <input type="radio" name="options" id="clean-4/5" autoComplete="off"/> 4/5
          </label>
          <label className="btn btn-info">
            <input type="radio" name="options" id="clean-5/5" autoComplete="off"/> 5/5
          </label>
        </div>
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
          <input
            type="text"
            name="title"
            style={{flex: '10', padding: '5px'}}
            placeholder="Add Comment..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
            style={{flex: '1'}}
          />
        </form>
      </div>
    )
  }
}

export default AddComment
