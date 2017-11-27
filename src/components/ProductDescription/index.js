import React from 'react'
import { Container , Divider} from 'semantic-ui-react'

const ProductDescription = ({ currentProduct }) => {
    return (
        <Container>
            <Divider horizontal>{currentProduct.title}</Divider>           
                    <p>  {currentProduct.description} </p>
        </Container>
    )
}

export default ProductDescription