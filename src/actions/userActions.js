import { UserConstants } from '../constants/UserConstants'
import { createBrowserHistory as history } from 'history'
import { userService } from '../services/userService'
import { alertActions } from './alertActions'
 
export const userActions = {
    login,
    logout,
    register
}


const login = (username,password) => dispatch => {
    dispatch(request({ username }))

    userService.login(username , password)
        .then(user => {
            dispatch(success(user))
            history.push('/')
        },error => {
            dispatch(failure(error))
            dispatch(alertActions.error(error))
        })


    const request = user  =>  { type: userConstants.LOGIN_REQUEST, user } 
    const success = user  =>  { type: userConstants.LOGIN_SUCCESS, user } 
    const failure = error =>  { type: userConstants.LOGIN_FAILURE, error } 
}

const logout = () => {
    userService.logout()    
    type:userConstants.logout
}

const register = users => dispatch => {
    dispatch(request(users))

    userService.register(users)
        .then(user => {
            dispatch(success)
            history.push('./shoppingbag')
            dispatch(alertActions.success('registration successful !'))
        },error => {
            dispatch(failure(error))
            dispatch(alertActions.error(error))
        })

        const request = user  =>  { type: userConstants.REGISTER_REQUEST, user } 
        const success = user  =>  { type: userConstants.REGISTER_SUCCESS, user } 
        const failure = error =>  { type: userConstants.REGISTER_FAILURE, error }
}