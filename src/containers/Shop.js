import React from 'react'
import { Grid } from 'semantic-ui-react'
import { DisplayGrid } from '../theme/Grid'
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import ProductList from '../components/ProductList'
import CategoryList from '../components/CategoryList'


const Shop = ({products}) => {
   
        return(
                <Grid columns={2}>
                    <Grid.Row>
                    <Grid.Column mobile={16} tablet={16} computer={2} >
                        <CategoryList products={products}/>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} computer={14}>
                        <DisplayGrid column={'repeat(auto-fill,19em)'} colGap={10} rowGap={70}>
                            {products.map((product,index) => 
                        <ProductList 
                            key={index}
                            product={product}/>
                        )}
                       </DisplayGrid>
                    </Grid.Column>
                 
                    </Grid.Row>
                </Grid>
        )
    }

const mapStateToProps = state => ({
    products : showProducts(state.products)
})


export default connect(mapStateToProps)(Shop)

