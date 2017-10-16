import * as types from '../constants/ActionTypes'
import products from '../api/Products'


const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products: products
  })
  
export const getAllProducts = () => dispatch => {
    dispatch(receiveProducts(products))
}

const selectProduct = productId => ({
    type : types.ADD_TO_SHOPPINGBAG,
    productId,
})

export const addToBag = productId => dispatch => {
    setTimeout(() => dispatch(selectProduct(productId)),1000)
}

const removeFromBag = index => ({
    type : types.REMOVE_FROM_BAG,
    index
})

export const deleteFromBag = index => dispatch => {
    dispatch(removeFromBag(index))
}










