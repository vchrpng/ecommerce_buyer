import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Label } from '../components/Etc/Label'
import { ButtonStyled } from '../components/Etc/ButtonStyled'
import RenderInputText from '../components/Etc/RenderInputText'
import { CustomLink } from '../components/Etc/CustomLink'


export default class Login extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                    <div style={{maxWidth:'500px',margin:'0 auto',paddingTop:'50px'}}>
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
                                <CustomLink to='/account/register'>
                                    <Label>Create Account</Label>
                                </CustomLink>
                            </div>
                           
                        </form>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
