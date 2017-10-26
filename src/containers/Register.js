import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Label } from '../components/Etc/Label'
import { ButtonStyled } from '../components/Etc/ButtonStyled'
import RenderInputText from '../components/Etc/RenderInputText'

class Register extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                    <div style={{maxWidth:'500px',margin:'0 auto',paddingTop:'50px'}}>
                        <form>
                            <div>
                                <Label>First Name</Label>
                                <RenderInputText/>
                            </div>
                            <div>
                                <Label>Last Name</Label>
                                <RenderInputText/>
                            </div>
                            <div>
                                <Label>Email</Label>
                                <RenderInputText/>
                            </div>
                            <div>
                                <Label>Password</Label>
                                <RenderInputText/>
                            </div>
                            <div>
                                <Label>Confirm Password</Label>
                                <RenderInputText/>
                            </div>
                            <div>
                                <ButtonStyled>
                                    Create
                                </ButtonStyled>
                            </div>
                            
                        </form>
                    </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Register