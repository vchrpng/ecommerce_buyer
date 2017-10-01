import * as types from '../constants/ActionTypes'

export const addToWhistlist =  (productId) => {
    type:types.ADD_TO_WISHLIST,
    productId
}