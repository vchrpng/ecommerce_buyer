import React from 'react';
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import { Grid , Container , Image , Rail , Sticky } from 'semantic-ui-react'
import ShippingDetail from '../components/ShippingDetail'
import ProductDescription from '../components/ProductDescription'
import { addToBag } from '../actions'



class Product extends React.Component {
    
    state = {}
    
    handleContextRef = contextRef => this.setState({ contextRef })
render(){
    const { contextRef } = this.state
    const { match , products , addToBag } = this.props
    const { id } = match.params
    const currentProduct = products[id-1]

    return(

        <Grid  
            style={{padding:'40px'}} 
            centered columns={3}>
           
            <Grid.Column>
            <div ref={this.handleContextRef}>
                <Rail position={'left'} >
                    <Sticky context={contextRef}>
                    <ProductDescription 
                        currentProduct={currentProduct}/>
                    </Sticky>
                </Rail>
                
                    <Container>
                        <Image src={currentProduct.img} fluid/>
                    </Container>
           
                <Rail position={'right'}>
                <Sticky context={contextRef}>
                    <Container>
                        <ShippingDetail onAddToBag={() => addToBag(currentProduct.id)}>
                            {currentProduct.price} $
                        </ShippingDetail>   
                    </Container>
                </Sticky>
                </Rail>
                </div>
            </Grid.Column>
           
        </Grid>
    )
    }
}

const mapStateToProps = state => ({
    products : showProducts(state.products)
})
export default connect(mapStateToProps,{addToBag})(Product)