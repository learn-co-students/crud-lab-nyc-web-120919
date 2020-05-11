import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant addReview={this.props.addReview} deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;