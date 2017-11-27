import { ADD_TO_SHOPPINGBAG , REMOVE_FROM_BAG } from '../constants/ActionTypes'


const initialState = {
    addedIds : []
}

const addToBagById = (state = initialState.addedIds , action) => {
    
    switch(action.type){
        case ADD_TO_SHOPPINGBAG :
            return [
                ...state,
                action.productId
            ]      
        default : 
            return state
    }
}


export const getBagProductsById = state => state.addedIds

const shoppingbag = (state = initialState,action) => {
    switch(action.type){
        case REMOVE_FROM_BAG : 
            return {
                addedIds : [
                    ...state.addedIds.slice(0,action.index),
                    ...state.addedIds.slice(action.index + 1)
                ]
            }
         
        case ADD_TO_SHOPPINGBAG : 
            return {
                addedIds : addToBagById(state.addedIds,action)
            }
        default : return state
    }
}

export default shoppingbag