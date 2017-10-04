import React from 'react';
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import Container from '../components/Etc/Container'
import { Row , Column , Flex } from '../theme/Grid'
import Image from '../components/Etc/Image'
import ShippingDetail from '../components/ShippingDetail/ShippingDetail'
import { addToBag } from '../actions'

const Product = ({ match , products }) => {
    const { id } = match.params
   
    const currentProduct = products[id-1]

    return(
        <Row>
            <Column lg={3}>
                <Flex align={'center'} style={{padding:'40px',height:'70vh'}}>
                   <p> {currentProduct.title}
                    <br/>
                    {currentProduct.description} </p>
                </Flex>
            </Column>
            <Column lg={4}>
                <Container height={'70vh'} padding={40}>
                    <Image height={'61vh'} width={'auto'} image={currentProduct.img}/>
                </Container>
            </Column>
            <Column lg={3}>
                <Flex align={'center'} style={{padding:'40px',height:'70vh'}}>
                    <ShippingDetail addToBagClicked={() => addToBag(id)}>
                        {currentProduct.price} $
                    </ShippingDetail>   
                </Flex>
            </Column>
        </Row>

    )
}

const mapStateToProps = state => ({
    products : showProducts(state.products)
})
export default connect(mapStateToProps,{ addToBag })(Product)