import * as types from '../constants/ActionTypes'
import products from '../api/Products'
import axios from 'axios'


const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products: products
  })
  
export const getAllProducts = () => dispatch => {
    axios.get('/api/products').then((res) => {
        dispatch(receiveProducts(res.data))
    })
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










