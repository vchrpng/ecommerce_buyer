import React from 'react';
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'
import ShippingDetail from '../components/CustomerActions'
import ProductDetail from '../components/ProductDetail'
import Slider from 'react-slick'
import { showProducts } from '../selectors'
import styled from 'styled-components'

const CurrentProductWrapper = styled.div`
    display:flex;

    .product-img-slider {
        max-width:300px;
    }

    .product-detail {
        width:100%;
        align-self:stretch;
        padding-left: 20px; 
        display: flex; 
        justify-content: space-between; 
        flex-direction: column;
    }
    
    @media only screen and (max-width : 750px){
            flex-direction:column;

            .product-detail {
                width: 100%;
                max-width: 100%;
                text-align:center;
            }
    }
`


const Product = ({ id , products , inventory }) => {
    
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

    return (<CurrentProductWrapper>
                <section className="product-img-slider">
                    <Slider variableWidth adaptiveHeight {...settings}>
                        {currentProduct.images.map((pic,index) =>
                            <Image wrapped size="medium" src={pic} key={index}/>
                        )}
                    </Slider>
                </section>
                <section className="product-detail">
                    <ProductDetail currentProduct={currentProduct} />
                    <ShippingDetail inventory={inventory} currentProduct={currentProduct} />
                </section>
            </CurrentProductWrapper>)
}

const mapStateToProps = state => ({
    products : showProducts(state),
    inventory : state.products.getInventory
})
export default connect(mapStateToProps)(Product)