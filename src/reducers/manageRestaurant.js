
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    
    switch (action.type) {
        
        case "ADD_RESTAURANT" :
            const restaurant = {id: cuidFn(), text: action.name}
            return {...state, restaurants: [...state.restaurants, restaurant]}

        case "DELETE_RESTAURANT" : 
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)  
            return {restaurants}
        
        case "ADD_REVIEW" : 
            const review = {}
            return {...state, reviews: [...state.reviews, review]}
            //reviews need to have a text component, restaurantId (foreign key), and unique id
        default :
            return state;    
    }
}
