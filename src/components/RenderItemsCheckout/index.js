import React from 'react'

const RenderItemsCheckout = ({ products , size }) => {
    return (
        products.map((product,idx) =>
            <div key={idx} style={{display:'flex',justifyContent:'space-between',padding:'10px 0'}}>
                <div>
                    <span><strong>{product.title}</strong></span>
                        <br/>
                    <span>category : {product.category}</span>
                        <br/>
                    <span>size : {size[idx]}</span>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <span>$ {product.price}</span>
                </div>
            </div>
        ) 
    )
}
export default RenderItemsCheckout