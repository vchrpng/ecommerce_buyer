import React from 'react';
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import Container from '../components/Etc/Container'
import { Row , Column , Grid } from '../theme/Grid'
import Image from '../components/Etc/Image'

const Product = ({ match , products }) => {
    const { id } = match.params
   
    const currentProduct = products[id-1]

    return(
        <Row style={{padding:'40px'}}>
            <Column md={4} >
            {currentProduct.description}
            </Column>
            <Column md={4}>
            <Container height={350}>
            <Image height={'100%'} width={'100%'} image={currentProduct.img}/>
            </Container>
            </Column>
            <Column md={4}>
            {currentProduct.price} $
           
            </Column>
        </Row>

    )
}

const mapStateToProps = state => ({
    products : showProducts(state.products)
})
export default connect(mapStateToProps)(Product)