import { ADD_TO_SHOPPINGBAG } from '../constants/ActionTypes'

const initialState = {
    id : []
}

const products = (state,action) => {
    switch(action.type){
        case ADD_TO_SHOPPINGBAG :
            return {...state}
        default : return state
    }
}

const addToBagById = (state = initialState.id , action) => {
    switch(action.type){
        case ADD_TO_SHOPPINGBAG :
            return [...state,action.id]
        default : 
            return state
    }
}


export const getAddToBagById = state => state.addToBagById
