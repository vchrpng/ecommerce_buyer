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

`

const Checkout = ({ checkout , history , isAuthenticated }) => {
      const submit = data => {
          return checkout(data)
        }
        // if(isAuthenticated){
            return (
                <Elements stripe={stripePromise}>
                    <CheckOutPageContainer style={{
                    height: '100vh',
                    margin:'0 auto',
                    padding:'20px', 
                    maxWidth: '800px',
                    display: 'flex',
                    justifyContent: 'center',
                    // alignItems: 'center'
                }}> 
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
