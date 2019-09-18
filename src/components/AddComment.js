import React, { Component } from 'react';

export class AddComment extends Component {

  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state);
    // this.setState({title: ''})
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
            value={this.state.comment}
            onChange={this.handleChange}
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
