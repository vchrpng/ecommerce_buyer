import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Label } from '../Etc/Label'
import RenderInputText  from '../Etc/RenderInputText'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { Field, reduxForm , formValueSelector } from 'redux-form'
import submit from './submit'
import { connect } from 'react-redux'

let LoginForm = ({ error, handleSubmit, submitting , submitSucceeded , LoggedInUser }) => {
    if(!submitSucceeded)
        return (
            <form onSubmit={handleSubmit(submit)}>
                <Grid textAlign={'center'}>
                    <Grid.Row>
                        <Grid.Column width={9}>
                            <div>
                                <Label>Email</Label>
                                <Field
                                name="email"
                                component={RenderInputText}
                                type="text"
                                label="username"
                                />
                            </div>
                            <div>
                                <Label>Password</Label>
                                <Field
                                name="password"
                                component={RenderInputText}
                                type="password"
                                label="password"
                                />
                            </div>
                            {error &&
                            <strong>
                            {error}
                            </strong>}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <ButtonStyled disabled={submitting}>Login</ButtonStyled>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </form>
        )
        else return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={9}>
                        <Label>Logged in as </Label>
                        <Label><strong> {LoggedInUser} </strong> </Label>
                        <div>not your account? Sign in as another user.</div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    
}

LoginForm = reduxForm({
    form : 'login'
})(LoginForm)

const selector = formValueSelector('login')

LoginForm = connect(state => {
    const email = selector(state,'email')
    return {
        LoggedInUser : `${email || ''}`
    } 
})(LoginForm)


export default LoginForm