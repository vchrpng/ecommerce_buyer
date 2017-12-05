import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid , Breadcrumb } from 'semantic-ui-react'
import ShippingForm from '../components/ShippingForm'
import CheckoutFooter from '../components/CheckoutFooter'
import { CustomLink } from '../components/Etc/Reusable'
import RenderItemsCheckout from '../components/RenderItemsCheckout'
import OrderSummary from '../components/OrderSummary'
import OrderTotal from '../components/OrderTotal'
import CheckoutNavigate from '../components/CheckoutNavigate'
import { GridCol } from '../components/Etc/Checkout'
import { connect } from 'react-redux'
import { getBagProducts , getTotal, getSize } from '../reducers'


class Checkout extends Component {
    render() {
        const { product , total , size } = this.props
        const shippingCost = total > 500 ? 0 : 50
        const orderTotal = parseFloat(total) + parseFloat(shippingCost)
        return (
            <div> 
              <Grid style={{
                  padding:'0 5%'
              }}>
                    <Grid.Row>
                        <GridCol>
                            <h1 style={{textAlign:'center',marginTop:'35px'}}> LOGO </h1>
                        </GridCol>
                    </Grid.Row>
                    <Grid.Row>
                        <GridCol>
                        <Breadcrumb style={{fontSize:'smaller'}}>
                        <CustomLink to='/shoppingbag'>  
                            <Breadcrumb.Section>
                              <label style={{color:'black'}}>  Shopping Bag </label>
                            </Breadcrumb.Section>
                            </CustomLink>
                            <Breadcrumb.Divider icon='right angle'/>
                            <Breadcrumb.Section>
                            <strong> Checkout </strong>
                            </Breadcrumb.Section>
                        </Breadcrumb>
                        </GridCol>
                    </Grid.Row>
                    <Grid.Row>
                        <GridCol>
                            <ShippingForm/>       
                        </GridCol>
                    </Grid.Row>
                    <Grid.Row>
                        <GridCol>
                            <div style={{borderTop:'1px solid lightgray',paddingTop:'20px'}}>
                            <h3> Order Summary </h3>
                            </div>
                        </GridCol>
                    </Grid.Row>
                    <Grid.Row>
                        <GridCol>
                            <RenderItemsCheckout 
                                product={product}
                                size={size}
                            />
                        </GridCol>
                    </Grid.Row>
                    <Grid.Row>
                        <GridCol>
                            <OrderSummary
                                shipping={shippingCost}
                                total={orderTotal}
                            />
                        </GridCol>
                    </Grid.Row>
                    <Grid.Row>
                        <GridCol>
                           <OrderTotal
                                total={orderTotal}
                           />
                        </GridCol>
                    </Grid.Row>
                    <Grid.Row>
                        <GridCol>
                            <CheckoutNavigate/>
                        </GridCol>
                    </Grid.Row>
                    <Grid.Row>
                        <GridCol>
                            <CheckoutFooter/>
                        </GridCol>
                    </Grid.Row>
                </Grid>  
            </div>      
        )
    }
}
const mapStateToProps = state => ({
    product : getBagProducts(state),
    total : getTotal(state),
    size : getSize(state)
})

Checkout.PropTypes = {
    product : PropTypes.array.isRequired,
    total : PropTypes.number.isRequired,
    size : PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Checkout)
