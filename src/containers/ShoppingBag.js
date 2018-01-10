import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteFromBag } from '../actions'
import { Grid , Table } from 'semantic-ui-react'
import ShoppingBagTablePricing from '../components/ShoppingBagTablePricing'
import RenderItemsOnBag from '../components/RenderItemsOnBag'
import EmptyBag from '../components/EmptyBag'
import { ButtonStyled } from '../components/Etc/Reusable'
import { MessageBox , FadeMessage } from '../components/Etc/RequiredMsg'
import Nav from '../components/Nav'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'
import { Padded , Td } from '../components/Responsive'
import { totalSelector , selectedProducts , selectedSizes } from '../selectors'

class ShoppingBag extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showRequired : false,
            text : 'Please Login First',
        }
    }

    authBeforeCheckout = () => {
        if(!this.props.isAuthenticated){
            this.setState({
                showRequired : !this.state.showRequired
            })
            setTimeout(() => this.setState({
                showRequired : !this.state.showRequired
            }),1000)
        }
        else this.props.history.push('/checkout')
    }

    render(){
        const { product , size , total } = this.props
        const haveProduct = product.length ? 
        <Padded>
            
            <Table basic='very' celled unstackable > 
            <Table.Header>
                <Table.Row>
                    <Td/>
                    <Table.HeaderCell
                        style={{borderLeft:'none'}}>
                        <label> Product  </label>
                    </Table.HeaderCell>
                    <Table.HeaderCell style={{borderLeft:'none'}}/>
                    <Table.HeaderCell 
                        textAlign={'right'} 
                        style={{borderLeft:'none'}}>
                        <label> Price  </label>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
                <RenderItemsOnBag
                    size={size}
                    product={product}
                    deleteFromBag={deleteFromBag}
                />
                <ShoppingBagTablePricing total={total}/>
            </Table>
            <div style={{width:'17%',marginLeft:'82%',marginTop:'50px'}}>
                    <ButtonStyled onClick={this.authBeforeCheckout}>
                        CHECKOUT
                    </ButtonStyled>
            </div>
        </Padded>
                : <EmptyBag/>

        return (
            <div>
            <Nav/>
            <CategoryList/>
           
            <Grid >
           
                <FadeMessage visible={this.state.showRequired}>
                    <MessageBox>
                        <p>{this.state.text}</p>
                    </MessageBox>
                </FadeMessage>
                <Grid.Row>
                    <Grid.Column>
                        <div style={{maxWidth:'900px',margin:'0 auto',paddingTop:'50px'}}>
                        <h4 style={{textAlign:'center',marginBottom:'50px'}}>YOUR SHOPPING BAG</h4>
                        {haveProduct}
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product : selectedProducts(state),
    total : totalSelector(state),
    size : selectedSizes(state),
    isAuthenticated : !!state.user.token
})

ShoppingBag.PropTypes = {
    product : PropTypes.array.isRequired,
    total : PropTypes.number.isRequired,
    size : PropTypes.array.isRequired,
    deleteFromBag : PropTypes.func.isRequired
}

export default connect(mapStateToProps,{deleteFromBag})(ShoppingBag)
