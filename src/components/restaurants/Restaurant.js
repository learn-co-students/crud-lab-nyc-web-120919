import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleDeleteClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant, addReview } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleDeleteClick}> X </button>
          <ReviewsContainer addReview={addReview} restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
