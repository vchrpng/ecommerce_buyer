import React from 'react';
import PropTypes from 'prop-types'
import SizePickup from '../SizePickup/SizePickup'
import { Header , Grid } from 'semantic-ui-react'
import { ButtonStyled } from '../Etc/ButtonStyled'


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
                <ButtonStyled onClick={onAddToBag}>
                    ADD TO BAG
                </ButtonStyled>
            </Grid.Row>
        </Grid>

    )
}

ShippingDetail.PropTypes = {
    onAddToBag : PropTypes.func.isRequired
}


export default ShippingDetail