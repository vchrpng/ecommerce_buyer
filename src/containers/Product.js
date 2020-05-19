import React from 'react';
import { connect } from 'react-redux'
import { ButtonStyled } from '../components/Etc/Reusable'
import { Container , Image, Segment, Modal } from 'semantic-ui-react'
import ShippingDetail from '../components/ShippingDetail'
import ProductDescription from '../components/ProductDescription'
import Slider from 'react-slick'
import { showProducts } from '../selectors'


const Product = ({ id , products , addToBag , inventory }) => {
    
    const currentProduct = products.filter(product => {
        return product.id === parseInt(id,10)
    })[0]
   

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    return  <React.Fragment>
                <Modal.Content>
                            <Slider variableWidth adaptiveHeight {...settings}>
                                {currentProduct.images.map((pic,index) =>
                                    <Image wrapped size="small" src={pic} key={index}/>
                                )}
                            </Slider>

                    
                        <Modal.Description>
                            <ProductDescription currentProduct={currentProduct} />
                            {currentProduct.price} $ USD

                        </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                
                        <ButtonStyled height={'35px'} onClick={this.handleAddToBagDelay} >
                        ADD TO BAG
                    </ButtonStyled>
                </Modal.Actions>
            </React.Fragment>
}

const mapStateToProps = state => ({
    products : showProducts(state),
    inventory : state.products.getInventory
})
export default connect(mapStateToProps)(Product)