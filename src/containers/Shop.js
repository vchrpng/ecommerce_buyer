import React from 'react'
import Container from '../components/Etc/Container'
import { Row , Column , Grid } from '../theme/Grid'
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import ProductList from '../components/ProductList/ProductList'
import CategoryList from '../components/CategoryList/CategoryList'

const Shop = ({products}) => {
        console.log(products)
        return(
            <Container >
                <Row>
                    <Column md={3}>
                    <CategoryList/>
                        </Column>
                    <Column md={6}>
                      <Grid column={'3,1fr'} gap={20}>
                     {products.map(product => 
                        <ProductList 
                            key={product.id}
                            product={product}
                        />
                     )}
                       </Grid>
                    </Column>
                    <Column md={3}>
                        
                    </Column>
                </Row>
            </Container>
        )
    }

const mapStateToProps = state => ({
    products : showProducts(state.products)
})


export default connect(mapStateToProps)(Shop)

