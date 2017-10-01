import React from 'react'
import Container from '../components/Etc/Container'
import { Row , Column } from '../theme/Grid'
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import ProductList from '../components/ProductList/ProductList'

const Shop = ({products}) => {
        console.log(products)
        return(
            <Container height={800}>
                <Row>
                    <Column md={4}>
                    nah
                        </Column>
                    <Column md={4}>
                        <Row>
                     {products.map(product => 
                        <ProductList 
                            key={product.id}
                            product={product}
                        />
                     )}
                        </Row>
                    </Column>
                    <Column md={1}>
                        woah
                    </Column>
                </Row>
            </Container>
        )
    }

const mapStateToProps = state => ({
    products : showProducts(state.products)
})


export default connect(mapStateToProps)(Shop)

