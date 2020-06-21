import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import RenderItemCheckout from '../RenderItemsCheckout'
import { totalSelector, selectedProducts , selectedSizes } from '../../selectors'
import RenderCostTotal from '../RenderCostTotal'

const OrderSummaryContainer = styled.section`
    padding: 40px;
    background: #ffffff;
    border-radius: 0px 20px 20px 0px;
    min-width:300px;
    max-width:620px;

    .order-summary-layout {
        max-width:400px;
        margin:0 auto;

        .order-summary-table {

            .items-to-checkout {
                max-height: 270px;
                overflow: scroll;
                padding-right: 20px;
                border-top:1px solid #f3f3f3;
                min-height:300px;
            }

            .order-total-price {
                border-bottom: 1px solid #f3f3f3;
            }
        }
    }

    @media only screen and (max-width : 750px){
            max-width:100%;
    }


`


const OrderSummary = ({ products,size,total }) => {
    return (
        <OrderSummaryContainer>
            <div className="order-summary-layout">
                <div className="order-summary-table"> 
                    <h3> OrderSummary </h3>
                    <div className="items-to-checkout">
                        <RenderItemCheckout 
                            products={products}
                            size={size}
                        />
                    </div>
                    <div className="order-total-price">
                        <RenderCostTotal 
                            total={total}
                        />
                    </div>
                </div>
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