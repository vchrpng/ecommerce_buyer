import React from 'react'

const CheckoutFooter = () => {
    return (
            <ul 
              style={{
                listStyle:'none',
                display:'flex',
                padding:'10px 0 0 0 ',
                borderTop:'1px solid lightgray'}}>
                <li style={{marginRight:'15px'}}>Refund policy</li>
                <li style={{marginRight:'15px'}}>Privacy policy</li>
                <li style={{marginRight:'15px'}}>Terms of service</li>
            </ul>
    )
}
export default CheckoutFooter