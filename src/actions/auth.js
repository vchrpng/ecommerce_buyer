import { USER_LOGGED_IN , USER_LOGGED_OUT } from '../constants/ActionTypes'
import api from '../services/api'

export const userLoggedIn = user => ({
    type : USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type : USER_LOGGED_OUT
})

export const login = credentials => dispatch => api.user.login(credentials)
    .then(user => {
        localStorage.ecommerceJWT = user.token
        localStorage.email = user.email
        dispatch(userLoggedIn(user))
    })
    

export const logout = () => dispatch => {
    localStorage.clear()
    dispatch(userLoggedOut())
}
    
export const signup = data => dispatch => api.user.signup(data)
    .then(user => dispatch(userLoggedIn(user)))