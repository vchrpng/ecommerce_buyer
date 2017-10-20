import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Label } from '../Etc/Label'
import { InputText } from '../Etc/InputText'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { Field, reduxForm } from 'redux-form'

const Login = () => {
    return (
        <form>
        <Grid textAlign={'center'}>
            <Grid.Row>
                <Grid.Column width={9}>
                <div>
                <Label>Email</Label>
                <Field
                    name="email"
                    component={InputText}
                    type="email"
                />
                </div>
                <div>
                <Label>Password</Label>
                <Field
                name="password"
                component={InputText}
                type="password"
                />
                </div>
                </Grid.Column>
            </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <ButtonStyled >Login</ButtonStyled>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    )
}

export default reduxForm({
    form : 'login'
})(Login)