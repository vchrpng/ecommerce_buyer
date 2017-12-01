import React from 'react'
import { Grid } from 'semantic-ui-react'
import { DisplayGrid } from '../theme/Grid'
import { connect } from 'react-redux'
import { showProducts } from '../reducers/products'
import ProductList from '../components/ProductList'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'


const Shop = ({products}) => {
   
    return(
            <div>
                <Nav/>
                <CategoryList/>
                <Grid>
                    <Grid.Row centered>
                    <Grid.Column computer={13} tablet={16}>
                    <div style={{marginTop:'50px'}}>
                        <h4 style={{textAlign:'center',paddingBottom:'30px'}}>SHOP ALL</h4>
                        <DisplayGrid column={'repeat(auto-fill,17em)'} colGap={50} rowGap={70}>
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
                <Footer/>
            </div>
        )
    }

const mapStateToProps = state => ({
     products : showProducts(state.products)
})


export default connect(mapStateToProps)(Shop)

