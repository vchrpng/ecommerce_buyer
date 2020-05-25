import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFromBag } from '../actions'
import { Grid , Table } from 'semantic-ui-react'
import ShoppingBagTablePricing from '../components/ShoppingBagTablePricing'
import RenderItemsOnBag from '../components/RenderItemsOnBag'
import EmptyBag from '../components/EmptyBag'
import { ButtonStyled, CustomLink } from '../components/Etc/Reusable'
import { MessageBox , FadeMessage } from '../components/Etc/RequiredMsg'
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
        // if(!this.props.isAuthenticated){
        //     this.setState({
        //         showRequired : !this.state.showRequired
        //     })
        //     setTimeout(() => this.setState({
        //         showRequired : !this.state.showRequired
        //     }),1000)
        // }
        // else
    }

    render(){
        const { product , size , total } = this.props
        const haveProduct = product.length ? 
        <Padded size="medium">
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
            <div>
                <CustomLink to="/checkout" >
                    <ButtonStyled onClick={this.authBeforeCheckout}>
                        CHECKOUT
                    </ButtonStyled>
                </CustomLink>
            </div>
        </Padded>
                : <EmptyBag/>

        return (
            <Grid >
           
                <FadeMessage visible={this.state.showRequired}>
                    <MessageBox>
                        <p>{this.state.text}</p>
                    </MessageBox>
                </FadeMessage>
                <Grid.Row>
                    <Grid.Column>
                        {haveProduct}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
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
