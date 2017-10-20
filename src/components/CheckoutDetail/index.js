import React from 'react'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { Label} from '../Etc/Label' 
import { Grid } from 'semantic-ui-react'

const CheckoutDetail = ({ total }) => {
    const shippingCost = total > 500 ? 0 : 50
    const orderTotal = parseFloat(total) + parseFloat(shippingCost)
    return (
        <Grid textAlign={'center'}>
            <Grid.Row>
            <Grid.Column computer={14}>
                <div style={{
                        display:'grid',
                        gridTemplateColumns:'repeat(12,1fr)',
                        gridTemplateRows:'repeat(3,auto)',
                        marginBottom:'20px'}}     
                >
                    <div style={{gridColumn:'3/9',gridRow:'1'}}> 
                        <Label> Total </Label>
                    </div>
                    <div style={{gridColumn:'9/11',textAlign:'right',gridRow:'1'}}>
                        ${total}
                    </div>
                
                    
                    <div style={{gridColumn:'3/9',gridRow:'2'}}>
                        <Label>Shipping Estimate </Label>
                    </div>
                    <div style={{gridColumn:'9/11',textAlign:'right',gridRow:'2'}}>
                        ${shippingCost.toFixed(2)}
                    </div>
                    
                    <div style={{gridColumn:'3/9',gridRow:'3'}}>
                        <Label> Duties and Taxes </Label>
                    </div>
                    <div style={{gridColumn:'9/11',textAlign:'right',gridRow:'3'}}>
                        included
                    </div>
                
                    <div style={{gridColumn:'3/9',gridRow:'4'}}>
                        <Label>Order Total</Label>
                    </div>
                    <div style={{gridColumn:'9/11',textAlign:'right',gridRow:'4'}}>
                        ${orderTotal.toFixed(2)}
                    </div>
                </div>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={5}>
                    <ButtonStyled>Checkout</ButtonStyled>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default CheckoutDetail