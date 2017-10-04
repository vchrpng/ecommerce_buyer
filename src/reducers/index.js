import products , * as productReducer from './products'
import * as shoppingbagReducer from './shoppingbag'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';

export default combineReducers({ products,form})


const getProduct = (state,id) => productReducer.byId(state,id)

export const getBagProducts = state => 
    ({
        ...getProduct
    })