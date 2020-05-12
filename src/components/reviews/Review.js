import React, { Component } from 'react';

class Review extends Component {


  handleDeleteReview = () => {
    this.props.deleteReview(this.props.review.id)
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
