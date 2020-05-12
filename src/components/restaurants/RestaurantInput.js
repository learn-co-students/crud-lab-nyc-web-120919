import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Restaurant Name</label>
            <input type='text' onChange={this.handleChange} value={this.state.text} placeholder='Restaurant Name' />
          </p>
            <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
