import React from 'react';
import { connect } from 'react-redux'
import { Container , Image, Segment, Modal } from 'semantic-ui-react'
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

    return  currentProduct.map(current =>
        <Modal.Content>
            <Slider {...settings}>
                {current.images.map((pic,index) =>
                <Segment>
                    <Image  src={pic} key={index}/>
                </Segment>
                )}
            </Slider>
            <ProductDescription currentProduct={current} />

            <ShippingDetail 
                currentProduct={current}
                inventory={inventory}
            >
                {current.price} $ USD
            </ShippingDetail> 
        </Modal.Content>
                      
                    )
}

const mapStateToProps = state => ({
    products : showProducts(state),
    inventory : state.products.getInventory
})
export default connect(mapStateToProps)(Product)