import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBagProducts , getTotal, getSize } from '../reducers'
import { deleteFromBag } from '../actions'
import { Grid , Table } from 'semantic-ui-react'
import CheckoutDetail from '../components/CheckoutDetail'
import CheckoutItems from '../components/CheckoutItems'
import RenderItemsOnBag from '../components/RenderItemsOnBag'
import EmptyBag from '../components/EmptyBag'
import { ButtonStyled , CustomLink } from '../components/Etc/Reusable'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'


const ShoppingBag = ({ product , deleteFromBag , total , size }) => {
   

    const haveProduct = product.length ? 
        <div>
            <Table basic='very' celled unstackable > 
                <CheckoutItems/>
                <RenderItemsOnBag
                    size={size}
                    product={product}
                    deleteFromBag={deleteFromBag}
                />
                <CheckoutDetail total={total}/>
            </Table>
            <div style={{width:'17%',marginLeft:'82%',marginTop:'50px'}}>
                <CustomLink to='/checkout' color={'white'}>
                    <ButtonStyled>
                    CHECKOUT
                    </ButtonStyled>
                </CustomLink>
            </div>
        </div>
                : <EmptyBag/>

    return (
        <div>
        <Nav/>
        <CategoryList/>
        <Grid >
            <Grid.Row>
                <Grid.Column>
                    <div style={{maxWidth:'900px',margin:'0 auto',paddingTop:'50px'}}>
                    <h4 style={{textAlign:'center',marginBottom:'50px'}}>YOUR SHOPPING BAG</h4>
                    {haveProduct}
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Footer/>
        </div>
    )
}

const mapStateToProps = state => ({
    product : getBagProducts(state),
    total : getTotal(state),
    size : getSize(state)
})

ShoppingBag.PropTypes = {
    product : PropTypes.array.isRequired,
    total : PropTypes.number.isRequired,
    size : PropTypes.array.isRequired
}

export default connect(mapStateToProps,{deleteFromBag})(ShoppingBag)
