import React from 'react'

const ShoppingBagTotalPrice = ({ total }) => {
    return (
            <div>
                <label style={{fontWeight:'bold'}}>Total</label>
                  <h4>  $ {total} </h4>
            </div>
    )
}

export default ShoppingBagTotalPrice