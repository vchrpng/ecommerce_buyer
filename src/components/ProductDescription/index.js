import React from 'react'
import styled from 'styled-components'

const ProductDetailContainer = styled.div`  
    .product-title {
        font-size: 18px;
    }
    .product-fabric {
        color: gray;
    }
    .product-price {
        margin: 10px 0;
    }
    .product-description {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

`

const ProductDescription = ({ currentProduct }) => {
    return (
        <ProductDetailContainer>
            <p className="product-title">{currentProduct.title}</p>         
            <p className="product-fabric">100% Nylon imported</p>
            <div className="product-price">
                <h3>{currentProduct.price} $ USD</h3>
            </div>
            <div className="product-description">
                <p>{currentProduct.description}</p>
            </div>
        </ProductDetailContainer>
    )
}

export default ProductDescription