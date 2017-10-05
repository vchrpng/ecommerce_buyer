import React from 'react'
import Container from '../components/Etc/Container'
import { connect } from 'react-redux'
import { Row , Column } from '../theme/Grid'
import { getBagProducts } from '../reducers'

const ShoppingBag = ({ products }) => {
    console.log(products)
        return (
            <Container height={500}>
                <Row>
                    <Column>
                    My Shopping Bag
                    </Column>
                </Row>
            </Container>
        )
}


const mapStateToProps = state => ({
    products : getBagProducts(state)
})


export default connect(mapStateToProps)(ShoppingBag)
