import React from 'react'
import styled from 'styled-components'

const CheckoutProduct = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px 0;

    .product-checkout-detail {
        > span {
            color:gray;
            &:nth-child(1) {
                color:rgb(0,0,0,0.7);
            }
        }
    }


    .product-checkout-price {
        display:flex;
        align-items:center;
    }

`

const RenderItemsCheckout = ({ products , size }) => {
    return (
        products.map((product,idx) =>
            <CheckoutProduct key={idx} >
                <div className="product-checkout-detail">
                    <span><strong>{product.title}</strong></span>
                        <br/>
                    <span>{product.category}</span>
                        <br/>
                    <span>{size[idx]}</span>
                </div>
                <div className="product-checkout-price" style={{}}>
                    <span><strong>$ {product.price}</strong></span>
                </div>
            </CheckoutProduct>
        ) 
    )
}
export default RenderItemsCheckout