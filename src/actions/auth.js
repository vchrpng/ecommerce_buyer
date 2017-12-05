
// import { createBrowserHistory as history } from 'history'


export const login = (data) => dispatch => {
    dispatch(request({ data }))
}

export const logout = () => {  
    type:userConstants.logout
}

export const register = users => dispatch => {
    dispatch(request(users))

}