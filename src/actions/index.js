import * as types from '../constants/ActionTypes'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const apiURI = process.env.REACT_APP_API


const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
  })
  
export const getAllProducts = () => dispatch => {
    axios.get(`${apiURI}/api/products`).then((res) => {
        dispatch(receiveProducts(res.data))
    })
}

export const filterCategory = category => (dispatch,getState) => {
    const {byId} = getState().products
    dispatch({
        type : types.FILTER_CATEGORY,
        category,byId
    })
}


const addToBagSuccess = (productId,size) => ({
    type : types.ADD_TO_SHOPPINGBAG,
    productId,size
})


export const addToBag = (productId,size) => (dispatch,getState) => {
    const { products } = getState()
    const current = products.getInventory.findIndex(el => el.id === productId)
    if (products.getInventory[current].inventory[size] > 0) {
        setTimeout(() => dispatch(addToBagSuccess(productId,size)),1000)
    }
}

const removeFromBag = (index,size,id) => ({
    type : types.REMOVE_FROM_BAG,
    index,size,id
})

export const deleteFromBag = (index,size,id) => dispatch => {
    console.log(index + size + id)
    dispatch(removeFromBag(index,size,id))
}

export const submitOrder = (data) => (dispatch,getState) => {
    const { shoppingbag , products } = getState()
    const user = localStorage.getItem('email')
        if(shoppingbag.addedIds.length && user){
            dispatch({
                type : types.SUBMIT_ORDER,
                shoppingbag,data,products,user
            })
        }
}

export const checkout = data => (dispatch,getState) => {
    const { products } = getState()
    console.log(products.getInventory)
   return  axios.post(`${apiURI}/api/orders`,data)
        .then(() => axios.put(`${apiURI}/api/products/new`,products.getInventory)
     .then(() => dispatch({ type : types.CHECKOUT_SUCCESS })))
}
