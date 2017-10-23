import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBagProducts , getTotal } from '../reducers'
import { deleteFromBag } from '../actions'
import { Grid , Icon , Image , Divider } from 'semantic-ui-react'
import CheckoutDetail from '../components/CheckoutDetail'
import CheckoutItems from '../components/CheckoutItems'
import { Label } from '../components/Etc/Label'
import Member from '../components/Member'
import RenderList from '../components/RenderList'


const ShoppingBag = ({ product , deleteFromBag , total }) => {
   
    return (
        <Grid >
            <Grid.Row columns={2}>
                <Grid.Column mobile={16} computer={8}>
                    <CheckoutItems>
                    <Divider/>
                        <RenderList
                            product={product}
                            deleteFromBag={deleteFromBag}
                        />
                        <Divider/>
                    </CheckoutItems>
                    <CheckoutDetail total={total}/>
                </Grid.Column>
                <Grid.Column only={'computer'} computer={8} >
                    <Member/>
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
