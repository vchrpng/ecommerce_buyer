import axios from 'axios'

const login = (username , password) => {
    const reqOptions = axios.post('/users/authenticate',{
        headers: { 'Content-Type': 'application/json' },
        body: ({ username, password })
    }).then(res => {
        if (!res.ok) {
            return Promise.reject(response.statusText);
        }
        return res
    }).then(user => {
        if (user && user.token) {
            localStorage.setItem('user', user);
        }
        return user
    })
}


const logout = () => {
    localStorage.removeItem('user')
}


export const userServices = {
    login,
    logout,
    register
}
