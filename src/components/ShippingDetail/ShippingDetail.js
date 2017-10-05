import React from 'react';
import PropTypes from 'prop-types'
import SizePickup from '../SizePickup/SizePickup'


const ShippingDetail = ({children , onAddToBag}) => {
    
    return (
        <div style={{textAlign:'center'}}>
            <div>
                <h3>{children}</h3>
                <p>Taxes and duties included.<br/>
                Free shipping on orders over $500</p>
            </div>
                <SizePickup/>
                <button onClick={onAddToBag}>
                ADD TO BAG
                </button>
        </div>

    )
}

ShippingDetail.PropTypes = {
    onAddToBag : PropTypes.func.isRequired
}


export default ShippingDetail