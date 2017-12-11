import products , * as productReducer from './products'
import shoppingbag , * as shoppingbagReducer from './shoppingbag'
import user from './user'
import { combineReducers } from 'redux'


const getBagProductsById = state => 
    shoppingbagReducer.getBagProductsById(state.shoppingbag)

const getProducts = (state,id) => 
    productReducer.getProducts(state.products,id)


export const getTotal = state =>
        getBagProductsById(state)
        .reduce((total,id) => 
              total + getProducts(state,id).price
            ,0).toFixed(2)



export const getBagProducts = state => 
    getBagProductsById(state).map((id,size) => ({
             ...getProducts(state,id),size
        }))

export const getSize = state =>
    shoppingbagReducer.getBagProductsBySize(state.shoppingbag)

export default combineReducers({ 
    products,
    shoppingbag,
    user
})
