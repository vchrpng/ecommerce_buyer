import { combineReducers } from 'redux'
import { 
    RECEIVE_PRODUCTS , 
    CHECKOUT_FAILURE , 
    CHECKOUT_SUCCESS ,
    ADD_TO_SHOPPINGBAG,
    SUBMIT_ORDER
} from '../constants/ActionTypes'
import _ from 'lodash'

const  inventoryUpdate = (state,action) => {
    switch(action.type){
    
    case ADD_TO_SHOPPINGBAG :  
        if(state[action.size] > 0)
            return  { 
                ...state,
                [action.size] : state[action.size] - 1         
        }
    
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
        return action.products.map((product,idx) => {
                const arr = {
                    inventory : product.inventory,
                    id : product.id
                }
                return arr
            })
          
        case ADD_TO_SHOPPINGBAG :
            const { productId } = action
            console.log(state[productId-1].inventory)
            return [
                ...state.slice(0,productId-1)
                .concat(state[productId-1] = {
                        ...state[productId-1],
                       inventory : inventoryUpdate(state[productId-1].inventory,action)})
                .concat(...state.slice(productId))
            ]
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
        case SUBMIT_ORDER :
            const products = action.products.byId
            const ids = action.shoppingbag.addedIds
            const sizes = action.shoppingbag.addedSizes
            return  {
                    ...action.data,
                    items : ids.map((id,idx) => {
                            const newObj =  _.pick(products[id],
                                ['title','category','price','id'])
                            return _.merge({},newObj,{size : sizes[idx]})
                        })
                    ,
                    total : ids
                    .reduce((total,id) => 
                        total + products[id].price,0),
                    email : action.user
                }
        case CHECKOUT_SUCCESS : return {}
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
state.getInventory




