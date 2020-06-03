import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { deleteFromBag } from '../actions'
import ShoppingBagTotalPrice from '../components/ShoppingBagTotalPrice'
import RenderItemsOnBag from '../components/RenderItemsOnBag'
import EmptyBag from '../components/EmptyBag'
import { ButtonStyled, CustomLink } from '../components/Etc/Reusable'
import { MessageBox , FadeMessage } from '../components/Etc/RequiredMsg'
import { totalSelector , selectedProducts , selectedSizes } from '../selectors'

const ShoppingBagContainer = styled.div`
    width: 400px;
    
    .shopping-bag-table {

    }


`

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
        <ShoppingBagContainer>
            <section className="shopping-bag-table">
                <table> 
                    <tr style={{ height: '40px' , fontWeight: 'bold'}}>
                        <th>
                            <label> Product  </label>
                        </th>
                        <th/>
                        <th />
                        <th>
                            <label> Price  </label>
                        </th>
                    </tr>
                    <RenderItemsOnBag
                        size={size}
                        product={product}
                        deleteFromBag={deleteFromBag}
                    />
                </table>
            </section>
            <section className="checkout-button">
                <ShoppingBagTotalPrice total={total}/>
                <CustomLink to="/checkout" >
                    <ButtonStyled onClick={this.authBeforeCheckout}>
                        CHECKOUT
                    </ButtonStyled>
                </CustomLink>
            </section>
           
        </ShoppingBagContainer>
                : <EmptyBag/>

        return (
                <div>
                    {haveProduct}
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
