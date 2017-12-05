import React from 'react'

const OrderTotal = ({ total }) => (
    <div style={{display:'flex',width:'100%'}}>
        <div style={{width:'50%'}}>
        <h4>    Order total</h4>
        </div>

        <div style={{width:'50%',textAlign:'right'}}>
        <h2 style={{marginRight:'-3px'}}>  $ {total} </h2>
        </div>
    </div>
)

export default OrderTotal