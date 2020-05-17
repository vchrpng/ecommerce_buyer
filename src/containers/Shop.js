import React from 'react'
import { Grid } from 'semantic-ui-react'
import { DisplayGrid } from '../theme/Grid'
import { connect } from 'react-redux'
import { showProducts } from '../selectors'
import BuyerProductList from '../components/BuyerProductList'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'


const Shop = ({ products }) => {
    return (
            <div>
                <Nav/>
                <CategoryList/>
                <Grid>
                    <Grid.Row centered>
                    <Grid.Column computer={13} tablet={16}>
                    <div style={{marginTop:'50px'}}>
                        <DisplayGrid column={'repeat(auto-fill,17em)'} colGap={50} rowGap={70}>
                            {products.map((product,index) => 
                        <BuyerProductList 
                            key={index}
                            product={product}/>
                        )}
                       </DisplayGrid>
                    </div>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }

const mapStateToProps = state => ({
    products : showProducts(state)
})

export default connect(mapStateToProps)(Shop)

