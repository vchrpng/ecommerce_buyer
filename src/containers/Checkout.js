import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutHeader from '../components/CheckoutHeader'
import CheckoutFooter from '../components/CheckoutFooter'
import { connect } from 'react-redux'
import { checkout } from '../actions'
// import { Redirect } from 'react-router-dom'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISH_SECRET);



const Checkout = ({ checkout , history , isAuthenticated }) => {
      const submit = data => {
          return checkout(data)
        }

        // if(isAuthenticated){
            return (
                <Elements stripe={stripePromise}>
                <div style={{margin:'0 auto',padding:'20px'}}> 
                    <CheckoutHeader />
                    <CheckoutForm submit={submit}/>
                    <CheckoutFooter/>
                </div>      
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
