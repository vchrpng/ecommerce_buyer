import products from './products'
import shoppingbag from './shoppingbag'
import user from './user'
import { combineReducers } from 'redux'



export default combineReducers({ 
    products,
    shoppingbag,
    user
})
