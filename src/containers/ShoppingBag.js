import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBagProducts , getTotal, getSize } from '../reducers'
import { deleteFromBag } from '../actions'
import { Grid , Table } from 'semantic-ui-react'
import CheckoutDetail from '../components/CheckoutDetail'
import CheckoutItems from '../components/CheckoutItems'
import RenderList from '../components/RenderList'
import EmptyBag from '../components/EmptyBag'


const ShoppingBag = ({ product , deleteFromBag , total , size }) => {
   

    const haveProduct = product.length ? 
            <Table basic='very' celled unstackable > 
                <CheckoutItems/>
                <RenderList
                    size={size}
                    product={product}
                    deleteFromBag={deleteFromBag}
                />
                <CheckoutDetail total={total}/>
                </Table>
                : <EmptyBag/>

    return (
        <Grid >
            <Grid.Row>
                <Grid.Column>
                    <div style={{maxWidth:'1000px',margin:'0 auto',paddingTop:'50px'}}>
                    <h4 style={{textAlign:'center',marginBottom:'50px'}}>YOUR SHOPPING BAG</h4>
                    {haveProduct}
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

const mapStateToProps = state => ({
    product : getBagProducts(state),
    total : getTotal(state),
    size : getSize(state)
})

ShoppingBag.PropTypes = {
    product : PropTypes.array.isRequired
}

export default connect(mapStateToProps,{deleteFromBag})(ShoppingBag)
