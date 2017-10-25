import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBagProducts , getTotal } from '../reducers'
import { deleteFromBag } from '../actions'
import { Grid  , Divider , Table } from 'semantic-ui-react'
import CheckoutDetail from '../components/CheckoutDetail'
import CheckoutItems from '../components/CheckoutItems'
import { Label } from '../components/Etc/Label'
import LoginForm from '../components/LoginForm'
import RenderList from '../components/RenderList'
import EmptyBag from '../components/EmptyBag'


const ShoppingBag = ({ product , deleteFromBag , total }) => {
   

    const haveProduct = product.length ? 
            <Table basic='very' celled collapsing> 
                <CheckoutItems/>
                <RenderList
                    product={product}
                    deleteFromBag={deleteFromBag}
                />
                <CheckoutDetail total={total}/>
                </Table>
                : <EmptyBag/>

    return (
        <Grid >
            <Grid.Row columns={2}>
                <Grid.Column mobile={16} computer={8}>
                   {haveProduct}
                </Grid.Column>
                <Grid.Column mobile={16} computer={8} >
                    <LoginForm/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

const mapStateToProps = state => ({
    product : getBagProducts(state),
    total : getTotal(state)
})

ShoppingBag.PropTypes = {
    product : PropTypes.array.isRequired
}

export default connect(mapStateToProps,{deleteFromBag})(ShoppingBag)
