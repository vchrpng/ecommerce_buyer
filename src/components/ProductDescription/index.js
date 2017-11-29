import React from 'react'
import { Container} from 'semantic-ui-react'

const ProductDescription = ({ currentProduct }) => {
    return (
        <Container>
            <p style={{fontSize:'18px'}}>{currentProduct.title}</p>         
            <p>{currentProduct.description}</p>
            <p>100% Nylon imported</p>
            <div>
                <p style={{fontSize:'14px',fontWeight:'bold'}}>Share</p>
            </div>
        </Container>
    )
}

export default ProductDescription