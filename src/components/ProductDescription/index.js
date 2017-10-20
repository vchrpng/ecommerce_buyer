import React from 'react'
import { Container , Divider} from 'semantic-ui-react'

const ProductDescription = ({ currentProduct }) => {
    return (
        <Container  text fluid>
            <Divider horizontal>{currentProduct.title}</Divider>           
                    <p>  {currentProduct.description} </p>
        </Container>
    )
}

export default ProductDescription