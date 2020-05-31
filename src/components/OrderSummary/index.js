import React from 'react'
import { connect } from 'react-redux'
import RenderItemCheckout from '../RenderItemsCheckout'
import { totalSelector, selectedProducts , selectedSizes } from '../../selectors'
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

const mapStateToProps = state => ({
    products : selectedProducts(state),
    total : totalSelector(state),
    size : selectedSizes(state),
})

export default connect(mapStateToProps)(OrderSummary)