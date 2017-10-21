import React from 'react'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'
import { Divider } from 'semantic-ui-react'

const Member = () => {
    return (
        <div>
            <LoginForm/>
            <Divider section/>
            <RegisterForm/>
        </div>
    )
}

export default Member