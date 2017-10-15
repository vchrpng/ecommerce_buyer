import React from 'react'
import { Grid } from 'semantic-ui-react'

const CheckoutDetail = ({ total }) => {
    const shippingCost = total > 500 ? 0 : 50
    const orderTotal = parseFloat(total) + parseInt(shippingCost)
    return (
        <Grid>
        <Grid.Row style={{marginLeft:'80px'}}>
            <Grid.Column width={4}/>
            <Grid.Column width={6}> Total</Grid.Column>
            <Grid.Column width={3} style={{textAlign:'right'}} >${total}</Grid.Column>
            <Grid.Column width={3} style={{padding:'0'}}/>
        </Grid.Row>
        <Grid.Row style={{padding:'0',marginLeft:'80px'}}>
            <Grid.Column width={4}/>
            <Grid.Column width={6}>Shipping Estimate</Grid.Column>
            <Grid.Column width={3} style={{textAlign:'right'}}>${shippingCost.toFixed(2)}</Grid.Column>
            <Grid.Column width={3} style={{padding:'0'}}/>
        </Grid.Row>
        <Grid.Row style={{padding:'0',marginLeft:'80px'}}>
            <Grid.Column width={4}/>
            <Grid.Column width={6}>Duties and Taxes</Grid.Column>
            <Grid.Column width={3} style={{textAlign:'right'}}>included</Grid.Column>
            <Grid.Column width={3} style={{padding:'0'}}/>
        </Grid.Row>
        <Grid.Row style={{marginLeft:'80px'}}>
            <Grid.Column width={4} />
            <Grid.Column width={6}>Order Total</Grid.Column>
            <Grid.Column width={3} style={{textAlign:'right'}}>${orderTotal.toFixed(2)}</Grid.Column>
            <Grid.Column width={3} style={{padding:'0'}}/>
        </Grid.Row>
        </Grid> 
    )
}

export default CheckoutDetail