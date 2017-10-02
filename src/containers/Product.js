import React from 'react';
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import Container from '../components/Etc/Container'
import { Row , Column } from '../theme/Grid'
import Image from '../components/Etc/Image'
import SizePickup from '../components/SizePickup/SizePickup'

const Product = ({ match , products }) => {
    const { id } = match.params
   
    const currentProduct = products[id-1]

    return(
        <Row>
            <Column lg={3}>
                <Container padding={40}>
                    {currentProduct.title}
                    <br/>
                    {currentProduct.description}
                </Container>
            </Column>
            <Column lg={4}>
                <Container padding={40}>
                    <Image height={'61vh'} width={'auto'} image={currentProduct.img}/>
                </Container>
            </Column>
            <Column lg={3}>
                <Container padding={40}>
                    <SizePickup>
                        {currentProduct.price} $
                    </SizePickup>   
                </Container>
            </Column>
        </Row>

    )
}

const mapStateToProps = state => ({
    products : showProducts(state.products)
})
export default connect(mapStateToProps)(Product)