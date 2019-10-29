import React, { Component } from 'react';

export class AddComment extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
 }

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
          <input
            type="text"
            name="comment"
            style={{flex: '10', padding: '5px'}}
            placeholder="Add Comment..."
            value={this.props.comment}
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default AddComment
