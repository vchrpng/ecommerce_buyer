import React from 'react';
import { connect } from 'react-redux'
import { showProducts , showInventory } from '../reducers/products'
import { Grid , Container , Image } from 'semantic-ui-react'
import ShippingDetail from '../components/ShippingDetail'
import ProductDescription from '../components/ProductDescription'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'
import Slider from 'react-slick'


    

const Product = ({ match , products , addToBag , inventory }) => {

    const { id } = match.params
    const currentProduct = products.filter(product => {
        return product.id == id
    })
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    // const currentInventory = inventory.filter(inventory => {
    //     return inventory.id == id
    // })

    const test = currentProduct.map(current =>
    <Grid.Row key={current.id}
        columns={5} 
        style={{textAlign:'center'}}
    >
        <Grid.Column computer={1}/>
        <Grid.Column
            only={'computer'}
            computer={3} 
            style={{top:'30%',position:'sticky',bottom:'20%',left:'0'}}>
                <ProductDescription 
                    currentProduct={current}
                />
        </Grid.Column>
        <Grid.Column
            only={'computer'}
            style={{margin:'0 auto'}}
             computer={4}
        >
            <Container>
                {current.images.map((pic,index) =>
                    <Image src={pic} key={index} style={{marginBottom:'50px'}}/>
                )}
            </Container>
        </Grid.Column>
        <Grid.Column  
            only='computer'
            computer={3} 
            style={{top:'30%',position:'sticky',bottom:'27%',right:'0'}}>
            <Container>
                <ShippingDetail 
                    currentProduct={current}
                    inventory={current.inventory}
                >
                    {current.price} $ USD
                </ShippingDetail>   
            </Container>
        </Grid.Column>
        <Grid.Column
            only={'tablet'}
            style={{margin:'0 auto'}}
             tablet='6'
        >
            <Container>
            <Slider {...settings}>
                {current.images.map((pic,index) =>
                    <Image size='mini' src={pic} key={index} style={{marginBottom:'50px'}}/>
                )}
            </Slider>
            </Container>
        </Grid.Column>
        <Grid.Column
            style={{margin:'0 auto'}}
            only='tablet'
            tablet='6'
        >
            <ProductDescription 
                    currentProduct={current}
                />
            <Container>
                <ShippingDetail 
                    currentProduct={current}
                    inventory={current.inventory}
                >
                    {current.price} $ USD
                </ShippingDetail>   
            </Container>
        </Grid.Column>
        
        
        <Grid.Column
        only={'mobile'}
        style={{margin:'0 auto'}}
        textAlign='center'
         mobile='14'>
            <Container>
            <Slider {...settings}>
                {current.images.map((pic,index) =>
                    <Image size='mini' src={pic} key={index} style={{marginBottom:'50px'}}/>
                )}
            </Slider>
            </Container>
        </Grid.Column>

        <Grid.Column
               style={{margin:'50px auto'}}
               only='mobile'
               mobile='16'
        >
            <Container>
                <ShippingDetail 
                    currentProduct={current}
                    inventory={current.inventory}
                >
                    {current.price} $ USD
                </ShippingDetail>   
            </Container>
        </Grid.Column>
        <Grid.Column computer={1}/>

    </Grid.Row>)

    return(
            <div>
                <Nav/>
                <CategoryList/>
                <Grid  
                    style={{padding:'40px'}} 
                    verticalAlign='middle'
                >
                    {test}
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