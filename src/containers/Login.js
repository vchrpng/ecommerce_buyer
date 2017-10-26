import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Label } from '../components/Etc/Label'
import { ButtonStyled } from '../components/Etc/ButtonStyled'
import RenderInputText from '../components/Etc/RenderInputText'


export default class Login extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <form>
                            <div>
                                <Label>Email</Label>
                                <RenderInputText/>
                            </div>
                            <div>
                                <Label>Password</Label>
                                <RenderInputText/>
                            </div>
                            <div>
                                <Label>Forget your password?</Label>
                            </div>
                            <div>
                                <ButtonStyled>
                                    SIGN IN
                                </ButtonStyled>
                            </div>
                            <div>
                                <Label>Create Account</Label>
                            </div>
                        </form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
