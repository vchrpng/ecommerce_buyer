import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS , 
    // ADD_TO_SHOPPINGBAG 
} from '../constants/ActionTypes'

const initialState = {
    id : [],
    product : {}
}

const getProductId = (state = initialState.id , action) => {
    switch(action.type){
        case RECEIVE_PRODUCTS : 
            return action.products.map(product => product.id)
        default : 
            return state
    }
}

const addProductItemById = (state = initialState.product , action ) => {
    switch(action.type){
        case RECEIVE_PRODUCTS : 
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                  obj[product.id] = product
                    return obj
                    },{})
              }
        // case ADD_TO_SHOPPINGBAG :
        //       return 
        //         const { productId } = action
        //         if (productId) {
        //           return {
        //             ...state,
        //             [productId]: products(state[productId], action)
        //           }
        //         }
        //         return state
              
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

