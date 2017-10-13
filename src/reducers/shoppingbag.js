import { ADD_TO_SHOPPINGBAG , REMOVE_FROM_BAG } from '../constants/ActionTypes'
import _ from 'lodash'

const initialState = {
    addedIds : []
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
    state.splice(action.index,1)
    
    switch(action.type){
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
         
        case ADD_TO_SHOPPINGBAG : 
            return {
                addedIds : addToBagById(state.addedIds,action),
            }
        default : return state
    }
}

export default shoppingbag