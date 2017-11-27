import products , * as productReducer from './products'
import shoppingbag , * as shoppingbagReducer from './shoppingbag'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';


const getBagProductsById = state => 
    shoppingbagReducer.getBagProductsById(state.shoppingbag)

const getProducts = (state,id) => 
    productReducer.getProducts(state.products,id)

export const getTotal = state =>
    getBagProductsById(state)
        .reduce((total,id) => 
            total + getProducts(state,id).price,0).toFixed(2)


export const getBagProducts = state => 
    getBagProductsById(state).map(id => ({
             ...getProducts(state,id)
        }))



export default combineReducers({ 
    products,
    form,
    shoppingbag
})
