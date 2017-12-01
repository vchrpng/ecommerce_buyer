import React, { Component } from 'react'
import { Grid , Image } from 'semantic-ui-react'
import { Label } from '../components/Etc/Label'
import { ButtonStyled } from '../components/Etc/Reusable'
import RenderInputText from '../components/Etc/RenderInputText'

class ShippingForm extends Component {
    render() {
        return (
            <div>
                <Grid
                    style={{margin:'0'}}
                >
                    <Grid.Row only={'computer'}
                    style={{
                        maxWidth:'78em',
                        height:'100vh',
                        background:'black',
                        padding:'0 5%',
                        margin:'0 auto',
                        }}    
                    >
                        <Grid.Column
                        computer={9}
                        only={'computer'}
                        style={{
                            height:'90vh',
                            background:'white',
                            paddingRight:'4%',
                            paddingTop:'4%',
                        }}
                        >

                        </Grid.Column>
                        <Grid.Column
                        computer={7}
                        only={'computer'}
                        style={{
                            height:'90vh',
                            background:'white',
                            paddingLeft:'4%',
                            paddingTop:'4%',
                        }}
                        >

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row only={'tablet'}>
                        <Grid.Column
                        style={{
                            height:'90vh',
                            background:'green',
                            margin:'0 auto'
                        }}
                        >
                            eiei
                        </Grid.Column>
                    </Grid.Row>
                </Grid>  
            </div>      
        )
    }
}
export default ShippingForm
