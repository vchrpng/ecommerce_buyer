import React from 'react'
import { Container} from 'semantic-ui-react'

const ProductDescription = ({ currentProduct }) => {
    return (
        <Container>
            <p style={{fontSize:'18px'}}>{currentProduct.title}</p>         
            <p>100% Nylon imported</p>
            <div>
                <h3>{currentProduct.price} $ USD</h3>
            </div>
        </Container>
    )
}

export default ProductDescription