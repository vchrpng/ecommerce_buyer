import { combineReducers } from 'redux'
import { ADD_TO_SHOPPINGBAG } from '../constants/ActionTypes'

const initialState = {
    id : [],
    size : ""
}

const addToBagById = (state = initialState.id , action) => {
    switch(action.type){
        case ADD_TO_SHOPPINGBAG :
            return {...state}
                    ,action.id
        default : 
            return state
    }
}