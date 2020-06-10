import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import styled from 'styled-components'
// import { Redirect } from 'react-router-dom'
import OrderSummary from '../components/OrderSummary'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISH_SECRET);

const CheckOutPageContainer = styled.div`
    margin:0 auto;
    max-width: 800px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    border-radius:20px;
    box-shadow: 0px 0px 26px -8px rgba(0,0,0,0.75);

    @media only screen and (max-width : 750px){
        flex-direction: column-reverse;
    }
`

const Checkout = ({ checkout , history , isAuthenticated }) => {
      const submit = data => {
          return checkout(data)
        }
        // if(isAuthenticated){
            return (
                <Elements stripe={stripePromise}>
                    <CheckOutPageContainer> 
                        <CheckoutForm submit={submit}/>
                        <OrderSummary 
                            />
                    </CheckOutPageContainer>      
                </Elements>
                
            )
        // }
        // else 
        // return <Redirect to='/account/myaccount' />
    
}
const mapStateToProps = state => ({
    isAuthenticated : !!state.user.token
})

export default connect(mapStateToProps,{checkout})(Checkout)
