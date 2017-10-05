import React from 'react'
import { connect } from 'react-redux'
import { Row , Column } from '../theme/Grid'
import { getBagProducts } from '../reducers'

const ShoppingBag = ({ products }) => {
    console.log(products)
        return (
  
                <Row>
                    <Column>
                    My Shopping Bag
                    </Column>
                </Row>
           
        )
}


const mapStateToProps = state => ({
    products : getBagProducts(state)
})


export default connect(mapStateToProps)(ShoppingBag)
