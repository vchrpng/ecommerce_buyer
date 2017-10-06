import React from 'react'
import { connect } from 'react-redux'
import { DisplayGrid } from '../theme/Grid'
import { getBagProducts } from '../reducers'
import EmptyBag from '../components/EmptyBag/EmptyBag'
import ItemsOnBag from '../components/ItemsOnBag/ItemsOnBag'

const ShoppingBag = ({ products }) => {
    if(products.length)
        return (<ItemsOnBag products={products}/>)
    else 
        return (<EmptyBag/>)
}

const mapStateToProps = state => ({
    products : getBagProducts(state)
})

export default connect(mapStateToProps)(ShoppingBag)
