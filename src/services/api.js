import axios from 'axios'
import dotenv from 'dotenv'


dotenv.config()

const apiURI = process.env.REACT_APP_API

export default {
    user : {
        login : credentials => axios.post(`${apiURI}/api/auth`, {credentials})
            .then(res => res.data.user),
        signup : user => axios.post(`${apiURI}/api/users`,{ user })
            .then(res => res.data.user)
    }
}