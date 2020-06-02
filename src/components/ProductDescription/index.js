import React from 'react'

const ProductDescription = ({ currentProduct }) => {
    return (
        <div>
            <p style={{fontSize:'18px'}}>{currentProduct.title}</p>         
            <p>100% Nylon imported</p>
            <div>
                <h3>{currentProduct.price} $ USD</h3>
            </div>
        </div>
    )
}

export default ProductDescription