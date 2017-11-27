import * as types from '../constants/ActionTypes'
import products from '../api/Products'


const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products: products
  })
  
export const getAllProducts = () => dispatch => {
    dispatch(receiveProducts(products))
}

const selectProduct = (productId,size) => ({
    type : types.ADD_TO_SHOPPINGBAG,
    productId,size
})

export const addToBag = (productId,size) => (dispatch) => {
    setTimeout(() => dispatch(selectProduct(productId,size)),1000)
}

const removeFromBag = index => ({
    type : types.REMOVE_FROM_BAG,
    index
})

export const deleteFromBag = index => dispatch => {
    dispatch(removeFromBag(index))
}










