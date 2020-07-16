import React, { Component } from 'react';


class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  } 

  submitChange = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }


  render() {
    return (
      <div>
        <form htmlFor='restaurant-input' onSubmit={(e) =>this.submitChange(e)}>
          <label>Restaurant Name</label>
          <input type='text' value={this.state.text} onChange={(e)=>this.handleChange(e)} />
        <input type='submit'/>
        </form>
      </div>
    );
  }
};


export default (RestaurantInput);
