import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
  state = {
    text: ''
  }
  
  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Review</label>
            <input type='text' onChange={this.handleChange} value={this.state.text}/>
          </p>
            <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
