import React from 'react'
import { Grid } from 'semantic-ui-react'
import { DisplayGrid } from '../theme/Grid'
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import ProductList from '../components/ProductList'



const Shop = ({products}) => {
   
        return(
                <Grid>
                    <Grid.Row>
                    <Grid.Column>
                    <div style={{marginTop:'50px'}}>
                        <h3 style={{textAlign:'center',paddingBottom:'30px'}}>SHOP ALL</h3>
                        <DisplayGrid column={'repeat(auto-fill,24em)'} colGap={30} rowGap={130}>
                            {products.map((product,index) => 
                        <ProductList 
                            key={index}
                            product={product}/>
                        )}
                       </DisplayGrid>
                    </div>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }

const mapStateToProps = state => ({
    products : showProducts(state.products)
})


export default connect(mapStateToProps)(Shop)

