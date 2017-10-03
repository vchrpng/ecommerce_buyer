import React from 'react';
import SizePickup from '../SizePickup/SizePickup'


const ShippingDetail = ({children}) => {
    return (
        <div style={{textAlign:'center'}}>
            <div>
                <h3>{children}</h3>
                <p>Taxes and duties included.<br/>
                Free shipping on orders over $500</p>
            </div>
                <SizePickup/>
        </div>

    )
}




export default ShippingDetail