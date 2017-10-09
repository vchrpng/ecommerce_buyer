import { ADD_TO_SHOPPINGBAG , REMOVE_FROM_BAG } from '../constants/ActionTypes'
import _ from 'lodash'

const initialState = {
    addedIds : [],
    index : 0
}

const addToBagById = (state = initialState.addedIds , action) => {
    
    switch(action.type){
        case ADD_TO_SHOPPINGBAG :
            console.log("add To bag by id")
            return [...state,action.productId]
            
        default : 
            return state
    }
}

const removeProductFromBag = (state = initialState.addedIds ,action) => {
    console.log(state)
    console.log(action)
    switch(action.type){
        case REMOVE_FROM_BAG :
            console.log("remove product")
            return  state.slice(1,-1)
            
        default : return state
    }
}

export const getBagProductsById = state => state.addedIds

const shoppingbag = (state = initialState,action) => {
    switch(action.type){
        case REMOVE_FROM_BAG : 
            return {
                addedIds : removeProductFromBag(state.addedIds,action)
            }
         
        default : 
            return {
                addedIds : addToBagById(state.addedIds,action),
            }
    }
}

export default shoppingbag