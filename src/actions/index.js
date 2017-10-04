import * as types from '../constants/ActionTypes'
import products from '../api/Products'


const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products: products
  })
  
export const getAllProducts = () => dispatch => {
    dispatch(receiveProducts(products))
}

const selectProduct = (productId) => ({
    type : types.ADD_TO_SHOPPINGBAG,
    productId
})

export const addToBag = productId => dispatch => {
    dispatch(selectProduct(productId))
}










