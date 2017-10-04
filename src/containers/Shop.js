import React from 'react'
import { Row , Column , Grid } from '../theme/Grid'
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import ProductList from '../components/ProductList/ProductList'
import CategoryList from '../components/CategoryList/CategoryList'


const Shop = ({products}) => {
        console.log(products)
        return(
            
                <Row>
                    <Column md={2}>
                    <CategoryList products={products}/>
                        </Column>
                    <Column md={8} sm={12}>
                      <Grid column={'repeat(auto-fill,19em)'} colGap={10} rowGap={50}>
                     {products.map(product => 
                        <ProductList 
                            key={product.id}
                            product={product}
                        />
                     )}
                       </Grid>
                    </Column>
                    <Column md={1}>
                        
                    </Column>
                </Row>
      
        )
    }

const mapStateToProps = state => ({
    products : showProducts(state.products)
})


export default connect(mapStateToProps)(Shop)

