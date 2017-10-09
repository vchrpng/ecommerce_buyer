import { ADD_TO_SHOPPINGBAG } from '../constants/ActionTypes'

const initialState = {
    id : []
}

const addToBagById = (state = initialState.id , action) => {
    switch(action.type){
        case ADD_TO_SHOPPINGBAG :
            // console.log("ADD TO BAG BY ID !!")
            return [...state,action.productId]
        default : 
            return state
    }
}

export const getBagProductsById = state => state.id

const shoppingbag = (state = initialState,action) => {
    switch(action.type){
        default : 
            // console.log("shoppingbag !!")
            return {
                id : addToBagById(state.id,action)
            }
    }
}

export default shoppingbag