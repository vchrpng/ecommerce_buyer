import { ADD_TO_SHOPPINGBAG , REMOVE_FROM_BAG } from '../constants/ActionTypes'


const initialState = {
    addedIds : [] ,
    addedSizes : []
}

const addedIds = (state = initialState.addedIds , action) => {
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
const addedSizes = (state = initialState.addedSizes, action) => {
    switch(action.type){
        case ADD_TO_SHOPPINGBAG :
            return [
                ...state,
                action.size
            ]      
        default : 
            return state
    }
}

export const getBagProductsById = state => state.addedIds
export const getBagProductsBySize = state => state.addedSizes


const shoppingbag = (state = initialState,action) => {
    switch(action.type){
        case REMOVE_FROM_BAG : 
            return {
                addedIds : [
                    ...state.addedIds.slice(0,action.index),
                    ...state.addedIds.slice(action.index + 1)
                ],
                addedSizes : [
                    ...state.addedSizes.slice(0,action.index),
                    ...state.addedSizes.slice(action.index + 1)
                ]
            }
         
        case ADD_TO_SHOPPINGBAG : 
            return {
                addedIds : addedIds(state.addedIds,action),
                addedSizes : addedSizes(state.addedSizes,action)
            }
        default : return state
    }
}

export default shoppingbag