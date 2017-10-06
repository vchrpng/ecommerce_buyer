import React from 'react';
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import { Grid , Container , Image , Divider } from 'semantic-ui-react'
import ShippingDetail from '../components/ShippingDetail/ShippingDetail'
import { addToBag } from '../actions'


    

const Product = ({ match , products , addToBag }) => {

    const { id } = match.params
    const currentProduct = products[id-1]

    return(

        <Grid verticalAlign='middle'>
            <Grid.Row columns={3}>
                <Grid.Column computer={5} only="computer">
                    <Container text fluid>
                    <Divider horizontal>{currentProduct.title}</Divider>           
                    <p>  {currentProduct.description} </p>
                    </Container>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={6}>
                    <Container>
                        <Image src={currentProduct.img} fluid/>
                    </Container>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={5}>
                    <Container>
                        <ShippingDetail onAddToBag={() => addToBag(currentProduct)}>
                        {currentProduct.price} $
                        </ShippingDetail>   
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

const mapStateToProps = state => ({
    products : showProducts(state.products)
})
export default connect(mapStateToProps,{addToBag})(Product)