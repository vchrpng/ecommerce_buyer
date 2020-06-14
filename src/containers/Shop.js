import React from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import { DisplayGrid } from '../theme/Grid'
import { connect } from 'react-redux'
import { showProducts } from '../selectors'
import BuyerProductList from '../components/BuyerProductList'
import Nav from '../components/Nav'


const CustomerShopContainer = styled.main`
    max-width: 1010px;
    margin: 0 auto;
`


const Shop = ({ products }) => {
    return (
        <CustomerShopContainer>
            <Nav />
            <Grid>
                <Grid.Row centered>
                <Grid.Column computer={13} tablet={16}>
                <div style={{marginTop:'20px'}}>
                    <DisplayGrid column={'repeat(auto-fill,12em)'} colGap={25}>
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
        </CustomerShopContainer>
        )
    }

const mapStateToProps = state => ({
    products : showProducts(state)
})

export default connect(mapStateToProps)(Shop)

