import React from 'react'
import { connect } from 'react-redux'
import { getBagProducts } from '../reducers'
import EmptyBag from '../components/EmptyBag'
import ItemsOnBag from '../components/ItemsOnBag'

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
