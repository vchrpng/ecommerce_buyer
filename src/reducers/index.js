import products , * as productReducer from './products'
import shoppingbag , * as shoppingbagReducer from './shoppingbag'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';

export default combineReducers({ products,form,shoppingbag})


const getBagProductsById = state => 
shoppingbagReducer.getBagProductsById(state.shoppingbag)

const getProducts = (state,id) => 
    productReducer.getProducts(state.products,id)


export const getBagProducts = state => 
    getBagProductsById(state).map(id => ({
             ...getProducts(state,id)
        }))

