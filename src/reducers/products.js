import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS } from '../constants/ActionTypes'


const getProductId = (state = [], action) => {
    switch(action.type){
        case RECEIVE_PRODUCTS : 
            return action.products.map(product => product.id)
        default : 
            return state
    }
}

const addProductItemById = (state = {} , action ) => {
    switch(action.type){
        case RECEIVE_PRODUCTS : 
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                  obj[product.id] = product
                    return obj
                    },{})
              }
              
        default : 
            return state
    }
}

export default combineReducers({
    getProductId,
    addProductItemById
})


export const getProducts = (state,id) => 
    state.addProductItemById[id]

export const showProducts = state => 
    state.getProductId.map(id => getProducts(state,id))


