import * as types from '../constants/ActionTypes'
import products from '../api/Products'


const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products: products
  })
  
export const getAllProducts = () => dispatch => {
    dispatch(receiveProducts(products))
}

const selectProduct = product => ({
    type : types.ADD_TO_SHOPPINGBAG,
    product,
})

export const addToBag = product => dispatch => {
    console.log("ADD TO BAG !!")
    dispatch(selectProduct(product))
}










