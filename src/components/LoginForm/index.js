import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Label } from '../Etc/Label'
import RenderInputText  from '../Etc/RenderInputText'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { Field, reduxForm } from 'redux-form'
import submit from './submit'


const LoginForm = props => {
    const { error, handleSubmit, submitting } = props
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
}

export default reduxForm({
    form : 'login'
})(LoginForm)