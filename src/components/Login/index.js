import React from 'react'
import { Form , Grid , Button } from 'semantic-ui-react'
import { Label } from '../Etc/Label'

const Login = () => {
    return (
        <Grid textAlign={'center'}>
            <Grid.Column width={9}>
                <Label>Log in</Label>
                <Form size='small'>
                    <Form.Input
                    placeholder='E-mail address'
                    />
                    <Form.Input
                    placeholder='Password'
                    type='password'
                    />
                    <Button  color='black'  size='large'>Login</Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Login