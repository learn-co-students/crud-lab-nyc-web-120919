import React, { Component } from 'react';

class Review extends Component {


  handleDeleteReview = () => {
    console.log(this.props)
  } 

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleDeleteReview}> X </button>
      </div>
    );
  }

};

export default Review;
