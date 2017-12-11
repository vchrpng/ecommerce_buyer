import React from 'react'
import RenderItemCheckout from '../RenderItemsCheckout'
import RenderCostTotal from '../RenderCostTotal'


const OrderSummary = ({ products,size,total }) => {
    return (
        <div>
            <h3> OrderSummary </h3>
            <div style={{
                borderTop:'1px solid lightgray'}}>
                <RenderItemCheckout 
                    products={products}
                    size={size}
                />
            </div>
            <div style={{
                borderBottom:'1px solid lightgray'
            }}>
                <RenderCostTotal 
                    total={total}
                />
            </div>
        </div>
    )
}


export default OrderSummary