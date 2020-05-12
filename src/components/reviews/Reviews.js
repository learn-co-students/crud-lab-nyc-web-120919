import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log(this.props.reviews)
    return (
      <ul>
        {this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId).map(review=> <Review deleteReview={this.props.deleteReview} review={review} key={review.id} />)}
      </ul>
    );
  }
};

export default Reviews;