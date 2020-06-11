import React from 'react'

const CheckoutProduct = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px 0;


    .product-checkout-price {
        display:flex;
        align-items:center;
    }

`

const RenderItemsCheckout = ({ products , size }) => {
    return (
        products.map((product,idx) =>
            <CheckoutProduct key={idx} >
                <div>
                    <span><strong>{product.title}</strong></span>
                        <br/>
                    <span>category : {product.category}</span>
                        <br/>
                    <span>size : {size[idx]}</span>
                </div>
                <div className="product-checkout-price" style={{}}>
                    <span>$ {product.price}</span>
                </div>
            </CheckoutProduct>
        ) 
    )
}
export default RenderItemsCheckout