import React, { Component } from 'react'
import { Grid , Image } from 'semantic-ui-react'
import { Label } from '../components/Etc/Label'
import { ButtonStyled } from '../components/Etc/Reusable'
import RenderInputText from '../components/Etc/RenderInputText'
import ShippingForm from '../components/ShippingForm'

class Checkout extends Component {
    render() {
        return (
            <div> 
              <Grid>
                    <Grid.Row>
                        <Grid.Column style={{
                              margin:'0 auto',
                              maxWidth:'40em'
                        }}>
                            <h1> LOGO </h1>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column style={{
                              margin:'0 auto',
                              maxWidth:'40em'
                        }}>
                            <p> Show order summary </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column
                        style={{
                            height:'90vh',
                            margin:'0 auto',
                            maxWidth:'40em'
                        }}
                        >
                            <ShippingForm/>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>  
            </div>      
        )
    }
}
export default Checkout
