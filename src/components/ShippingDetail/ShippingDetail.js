import React from 'react';
import PropTypes from 'prop-types'
import SizePickup from '../SizePickup/SizePickup'
import { Button , Icon , Header , Grid } from 'semantic-ui-react'


const ShippingDetail = ({ children , onAddToBag }) => {
    
    return (
        <Grid container textAlign="center">
            <Grid.Row ><Header size="medium">{children}</Header></Grid.Row >
            <Grid.Row ><p>Taxes and duties included.<br/>
                Free shipping on orders over $500</p></Grid.Row >
            <Grid.Row>
                <SizePickup/>
            </Grid.Row>
            <Grid.Row>
                <Button onClick={onAddToBag}>
                    <Button.Content>ADD TO BAG</Button.Content>
                </Button>
            </Grid.Row>
        </Grid>

    )
}

ShippingDetail.PropTypes = {
    onAddToBag : PropTypes.func.isRequired
}


export default ShippingDetail