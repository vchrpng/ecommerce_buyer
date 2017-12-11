import { combineReducers } from 'redux'
import { 
    RECEIVE_PRODUCTS , 
    CHECKOUT_REQUEST, 
    CHECKOUT_FAILURE , 
    CHECKOUT_SUCCESS ,
    UPDATE_INVENTORY ,
    ADD_TO_SHOPPINGBAG
} from '../constants/ActionTypes'
import _ from 'lodash'

const  inventoryUpdate = (state,action) => {
    switch(action.type){
       
    case ADD_TO_SHOPPINGBAG : 
    if (state[action.size] > 0 ) {   
            return  {
            ...state,
            [action.size] : state[action.size] - 1
        }
    }
    else return state
    
        default : return state
    }
}

const getProductId = (state = [], action) => {
    switch(action.type){
        case RECEIVE_PRODUCTS : 
            return action.products.map(product => product.id)
        default : 
            return state
    }
}

const getInventory = (state = {},action) => {
    switch(action.type){
        case RECEIVE_PRODUCTS :
            return {
               inventory :  action.products.map(product => product.inventory)
            }
        case ADD_TO_SHOPPINGBAG :
            const { productId } = action
            return {
                ...state,
                inventory : {
                    ...state.inventory,
                    [productId - 1] : inventoryUpdate(state.inventory[productId - 1],action)
                }
            }
        default : return state
    }
}

const byId = (state = {} , action ) => {
    switch(action.type){
        case RECEIVE_PRODUCTS : 
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                  obj[product.id] = product
                    return obj
                    },{})
              }
        default : return state
    }    
}

export const checkout = (state = {}, action) => {
   
    switch (action.type) {
        case CHECKOUT_REQUEST : return {}
        case CHECKOUT_SUCCESS :
            const products = action.products.byId
            const ids = action.shoppingbag.addedIds
            const sizes = action.shoppingbag.addedSizes
            console.log(action.user)
            return {
                order : {
                    ...action.data,
                    items : ids.map((id,idx) => {
                            const test =  _.pick(products[id],
                                ['title','category','price','id'])
                            return _.merge({},test,{size : sizes[idx]})
                        })
                    ,
                    total : ids
                    .reduce((total,id) => 
                        total + products[id].price,0),
                    email : action.user
                }
            }
        case CHECKOUT_FAILURE : 
            return { }
        default :
            return state
    }
}

export default combineReducers({
    byId,
    getProductId,
    checkout,
    getInventory
})

export const getProducts = (state,id) => 
state.byId[id]

export const showProducts = state => 
state.getProductId.map(id => getProducts(state,id))

export const showInventory = state => 
state.getInventory.inventory




