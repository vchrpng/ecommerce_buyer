import React from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import { DisplayGrid } from '../theme/Grid'
import { connect } from 'react-redux'
import { showProducts } from '../selectors'
import BuyerProductList from '../components/BuyerProductList'
import Nav from '../components/Nav'
import BeatLoader from "react-spinners/BeatLoader";


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
                    {products.length ? 
                    <DisplayGrid column={'repeat(auto-fill,12em)'} colGap={25}>
                    {products.map((product,index) => 
                    <BuyerProductList 
                        key={index}
                        product={product}/>
                        )}
                    </DisplayGrid> :
                    <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                        <BeatLoader
                            size={20}
                            color={"#333333"}
                        /> 
                    </div>}
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

