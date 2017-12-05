import React from 'react'

const OrderSummary = ({ total , shipping }) => {
    return (
    <div style={{width:'100%',display:'flex'}}>
        <div style={{width:'50%'}}>
            <span style={{fontWeight:'bold'}}>   Subtotal </span>
            <br/>
            <span style={{fontWeight:'bold'}}>    Shipping</span>
            <br/>
            <span style={{fontWeight:'bold'}}>     Duties and taxes</span>
            <br/>
        </div>
        <div style={{width:'50%',textAlign:'right'}}>
            <span style={{marginRight:'-3px',fontWeight:'bold'}}>  $ {total}</span>
            <br/>
            <span style={{marginRight:'-3px',fontWeight:'bold'}}>   $ {shipping}</span>
            <br/>
            <span style={{marginRight:'-7px',fontWeight:'bold'}}>  included </span>
            <br/>
        </div>
    </div>
    )
}

export default OrderSummary