import React from 'react';
import { connect } from 'react-redux'
import { ButtonStyled } from '../components/Etc/Reusable'
import { Container , Image, Segment } from 'semantic-ui-react'
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

    return (<div style={{ display: 'flex',maxWidth: '500px' }}>
                <div style={{ maxWidth: '300px'}}>
                    <Slider variableWidth adaptiveHeight {...settings}>
                        {currentProduct.images.map((pic,index) =>
                            <Image wrapped size="medium" src={pic} key={index}/>
                        )}
                        
                    </Slider>
                </div>
                <div style={{ maxWidth: '250px', padding: '20px 0 20px 20px' }}>
                    <ProductDescription currentProduct={currentProduct} />
                    <ShippingDetail inventory={inventory} currentProduct={currentProduct} />
                </div>
            </div>)
                           

                        {/* <ButtonStyled height={'35px'} onClick={this.handleAddToBagDelay} >
                        ADD TO BAG

                    </ButtonStyled> */}

}

const mapStateToProps = state => ({
    products : showProducts(state),
    inventory : state.products.getInventory
})
export default connect(mapStateToProps)(Product)