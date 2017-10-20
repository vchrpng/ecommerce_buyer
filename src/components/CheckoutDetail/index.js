import React from 'react'
import { ButtonStyled } from '../Etc/ButtonStyled'

const CheckoutDetail = ({ total }) => {
    const shippingCost = total > 500 ? 0 : 50
    const orderTotal = parseFloat(total) + parseFloat(shippingCost)
    return (
        <div>
        <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(12,1fr)',
            gridTemplateRows:'repeat(3,auto)',
            padding:'10px',
            borderTop:'1px solid lightgray'}}
            
            >
       
            <div style={{gridColumn:'1/9',gridRow:'1'}}> Total</div>
            <div style={{gridColumn:'11/12',textAlign:'right',gridRow:'1'}} >${total}</div>
       
        
            <div style={{gridColumn:'1/9',gridRow:'2'}}>Shipping Estimate</div>
            <div style={{gridColumn:'11/12',textAlign:'right',gridRow:'2'}}>${shippingCost.toFixed(2)}</div>
        
            <div style={{gridColumn:'1/9',gridRow:'3'}}>Duties and Taxes</div>
            <div style={{gridColumn:'11/12',textAlign:'right',gridRow:'3'}}>included</div>
      
            <div style={{gridColumn:'1/9',gridRow:'4'}}>Order Total</div>
            <div style={{gridColumn:'11/12',textAlign:'right',gridRow:'4'}}>${orderTotal.toFixed(2)}</div>
        </div>
            <ButtonStyled>Checkout</ButtonStyled>
        </div>
        
    )
}

export default CheckoutDetail