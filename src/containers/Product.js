import React from 'react';
import { connect } from 'react-redux'
import { Grid , Container , Image } from 'semantic-ui-react'
import ShippingDetail from '../components/ShippingDetail'
import ProductDescription from '../components/ProductDescription'
import Slider from 'react-slick'
import { showProducts } from '../selectors'


const Product = ({ id , products , addToBag , inventory }) => {
    
    const currentProduct = products.filter(product => {
        return product.id === parseInt(id,10)
    })
   

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    const product = currentProduct.map(current =>
            <Grid.Row key={current.id}
                columns={5} 
                style={{textAlign:'center'}}
            >
                <Grid.Column
                    style={{margin:'0 auto'}}
                    tablet='6'
                    mobile='12'
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
                    style={{margin:'50px auto'}}
                    tablet='6'
                    mobile='12'
                >
                    <ProductDescription currentProduct={current} />

                    <Container>
                        <ShippingDetail 
                            currentProduct={current}
                            inventory={inventory}
                        >
                            {current.price} $ USD
                        </ShippingDetail>   
                    </Container>
                </Grid.Column>
            </Grid.Row>)

                

    return(
            <div>
                <Grid verticalAlign='middle'>
                    {product}
                </Grid>
            </div>
    )
}

const mapStateToProps = state => ({
    products : showProducts(state),
    inventory : state.products.getInventory
})
export default connect(mapStateToProps)(Product)