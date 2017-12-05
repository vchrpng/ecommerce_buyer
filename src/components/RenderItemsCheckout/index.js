import React from 'react'

const RenderItemsCheckout = ({ product , size }) => {
    return (
        product.map((product,idx) =>
            <div key={idx} style={{width:'100%',display:'flex'}}>
                <div style={{width:'50%'}}>
                    <span style={{fontWeight:'bold'}}>{product.title}</span>
                        <br/>
                    <span>category : {product.category}</span>
                        <br/>
                    <span>size : {size[idx]}</span>
                </div>
                <div style={{width:'50%',textAlign:'right',verticalAlign:'middle'}}>
                    <span style={{fontWeight:'bold'}}>{product.price}</span>
                </div>
            </div>
        )
       
    )
}
export default RenderItemsCheckout