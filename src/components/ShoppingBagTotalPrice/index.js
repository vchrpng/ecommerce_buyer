import React from 'react'

const ShoppingBagTotalPrice = ({ total }) => {
    return (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px'}}>
                <label style={{fontWeight:'bold'}}>Total</label>
                  <h3 style={{ margin: 0 }}>  $ {total} </h3>
            </div>
    )
}

export default ShoppingBagTotalPrice