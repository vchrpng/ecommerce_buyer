import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBagProducts } from '../reducers'
import EmptyBag from '../components/EmptyBag'
import ItemsOnBag from '../components/ItemsOnBag'

const ShoppingBag = ({ product }) => {
   
    if(product.length)
        return (<ItemsOnBag product={product}/>)
    else 
        return (<EmptyBag/>)
}

const mapStateToProps = state => ({
    product : getBagProducts(state)
})

ShoppingBag.PropTypes = {
    product : PropTypes.array.isRequired
}

export default connect(mapStateToProps)(ShoppingBag)
