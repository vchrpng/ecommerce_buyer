import React from 'react'
import PropTypes from 'prop-types'
import RenderItemCheckout from '../RenderItemsCheckout'
import RenderCostTotal from '../RenderCostTotal'
import { connect } from 'react-redux'
import { getBagProducts , getTotal, getSize } from '../../reducers'

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
    products : getBagProducts(state),
    total : getTotal(state),
    size : getSize(state)
})

OrderSummary.PropTypes = {
    product : PropTypes.array.isRequired,
    total : PropTypes.number.isRequired,
    size : PropTypes.array.isRequired
}


export default connect(mapStateToProps)(OrderSummary)