import { combineReducers } from 'redux'
import { 
    RECEIVE_PRODUCTS , 
    ADD_TO_SHOPPINGBAG,
    SUBMIT_ORDER ,
    REMOVE_FROM_BAG
} from '../constants/ActionTypes'
import _ from 'lodash'

const inventoryUpdate = (state,action) => {
    switch(action.type){
    case REMOVE_FROM_BAG :
        return  { 
            ...state,
            [action.size] : state[action.size] + 1       
        }
    case ADD_TO_SHOPPINGBAG :  
        if(state[action.size] > 0)
            return  { 
                ...state,
                [action.size] : state[action.size] - 1         
        }
        else return 
    
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
            const invenId = state.findIndex((el) => el.id === productId)
            return [
                ...state.slice(0,invenId)
                .concat(state[invenId] = {
                        ...state[invenId],
                       inventory : inventoryUpdate(state[invenId].inventory,action)})
                .concat(...state.slice(invenId + 1))
            ]
        case REMOVE_FROM_BAG :
            const removeId = state.findIndex((el) => el.id === action.id)
            return [
                ...state.slice(0,removeId)
                .concat(state[removeId] = {
                        ...state[removeId],
                       inventory : inventoryUpdate(state[removeId].inventory,action)})
                .concat(...state.slice(removeId + 1))
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




