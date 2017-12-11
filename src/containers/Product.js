import React from 'react';
import { connect } from 'react-redux'
import { showProducts , showInventory } from '../reducers/products'
import { Grid , Container , Image } from 'semantic-ui-react'
import ShippingDetail from '../components/ShippingDetail'
import ProductDescription from '../components/ProductDescription'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'


    

const Product = ({ match , products , addToBag , inventory }) => {

    const { id } = match.params
    const currentProduct = products[id-1]

    return(
            <div>
                <Nav/>
                <CategoryList/>
                <Grid  
                    style={{padding:'40px'}} 
                    verticalAlign='middle'
                >
                    <Grid.Row 
                        columns={5} 
                        style={{textAlign:'center'}}
                    >
                        <Grid.Column computer={1}/>
                        <Grid.Column 
                            computer={3} 
                            only="computer" 
                            style={{top:'30%',position:'sticky',bottom:'30%',left:'0'}}>
                                <ProductDescription 
                                    currentProduct={currentProduct}
                                />
                        </Grid.Column>
                        <Grid.Column
                            style={{margin:'0 auto'}}
                            mobile={16} tablet={16} computer={4}
                        >
                            <Container>
                                {currentProduct.images.map((pic,index) =>
                                    <Image src={pic} key={index} style={{marginBottom:'50px'}}/>
                                )}
                            </Container>
                        </Grid.Column>
                        <Grid.Column  
                            mobile={16} 
                            tablet={16} 
                            computer={3} 
                            style={{top:'30%',position:'sticky',bottom:'37%',right:'0'}}>
                            <Container>
                                <ShippingDetail 
                                    currentProduct={currentProduct}
                                    inventory={inventory[id-1]}
                                >
                                    {currentProduct.price} $ USD
                                </ShippingDetail>   
                            </Container>
                        </Grid.Column>
                        <Grid.Column computer={1}/>
                    </Grid.Row>
                </Grid>
                <Footer/>
            </div>
    )
}

const mapStateToProps = state => ({
    products : showProducts(state.products),
    inventory : showInventory(state.products)
})
export default connect(mapStateToProps)(Product)