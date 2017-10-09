import React from 'react';
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import { Grid , Container , Image } from 'semantic-ui-react'
import ShippingDetail from '../components/ShippingDetail'
import ProductDescription from '../components/ProductDescription'
import { addToBag } from '../actions'


    

const Product = ({ match , products , addToBag }) => {

    const { id } = match.params
    const currentProduct = products[id-1]

    return(

        <Grid  
            style={{padding:'40px'}} 
            verticalAlign='middle'>
            <Grid.Row 
                columns={3}>
                <Grid.Column 
                    computer={5} 
                    only="computer">
                    <ProductDescription 
                        currentProduct={currentProduct}/>
                </Grid.Column>
                <Grid.Column 
                    style={{padding:'40px'}}  
                    mobile={16} tablet={16} computer={6}>
                    <Container>
                        <Image src={currentProduct.img} fluid/>
                    </Container>
                </Grid.Column>
                <Grid.Column  
                    mobile={16} tablet={16} computer={5}>
                    <Container>
                        <ShippingDetail onAddToBag={() => addToBag(currentProduct.id)}>
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