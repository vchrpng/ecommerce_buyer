import * as types from '../constants/ActionTypes'
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

const addToBagSuccess = (productId,size) => ({
    type : types.ADD_TO_SHOPPINGBAG,
    productId,size
})


export const addToBag = (productId,size) => (dispatch,getState) => {
    const { products } = getState()
    if (products.getInventory[productId].inventory[size] > 0) {
        setTimeout(() => dispatch(addToBagSuccess(productId,size)),1000)
    }
}

const removeFromBag = index => ({
    type : types.REMOVE_FROM_BAG,
    index
})

export const deleteFromBag = index => dispatch => {
    dispatch(removeFromBag(index))
}

export const submitOrder = (data) => (dispatch,getState) => {
    const { shoppingbag , products } = getState()
    const user = localStorage.getItem('email')
        if(shoppingbag.addedIds.length > 0){
            dispatch({
                type : types.SUBMIT_ORDER,
                shoppingbag,data,products,user
            })
        }
}

export const checkout = data => (dispatch,getState) => {
    const { products } = getState()
    axios.post('/api/orders',data)
    // .then(response =>
    //     axios.put('/api/products/new',products.getInventory)
    // )
    dispatch({ type : types.CHECKOUT_SUCCESS })
}
