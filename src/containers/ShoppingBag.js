import React from 'react'
import { connect } from 'react-redux'
import { getBagProducts } from '../reducers'
import EmptyBag from '../components/EmptyBag'
import ItemsOnBag from '../components/ItemsOnBag'

const ShoppingBag = ({ product }) => {
    console.log(product)
    if(product.length)
        return (<ItemsOnBag product={product}/>)
    else 
        return (<EmptyBag/>)
}

const mapStateToProps = state => ({
    product : getBagProducts(state)
})

export default connect(mapStateToProps)(ShoppingBag)
