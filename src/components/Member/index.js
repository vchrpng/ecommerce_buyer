import React from 'react'
import Register from '../Register'
import Login from '../Login'
import { Divider } from 'semantic-ui-react'

const Member = () => {
    return (
        <div>
            <Login/>
            <Divider section/>
            <Register/>
        </div>
    )
}

export default Member