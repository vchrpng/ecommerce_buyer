import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import RenderItemCheckout from '../RenderItemsCheckout'
import { totalSelector, selectedProducts , selectedSizes } from '../../selectors'
import RenderCostTotal from '../RenderCostTotal'

const OrderSummaryContainer = styled.section`
    padding: 20px;
    background: gray;
    border-radius:6px;
    height: fit-content;
    min-width:300px;
`


const OrderSummary = ({ products,size,total }) => {
    return (
        <OrderSummaryContainer>
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
        </OrderSummaryContainer>
    )
}

const mapStateToProps = state => ({
    products : selectedProducts(state),
    total : totalSelector(state),
    size : selectedSizes(state),
})

export default connect(mapStateToProps)(OrderSummary)