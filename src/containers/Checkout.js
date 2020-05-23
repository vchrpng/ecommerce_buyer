import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutHeader from '../components/CheckoutHeader'
import CheckoutFooter from '../components/CheckoutFooter'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { Redirect } from 'react-router-dom'
import { StripeProvider, Elements } from 'react-stripe-elements'



const Checkout = ({ checkout , history , isAuthenticated }) => {
      const submit = data => {
          return checkout(data)
        }

        // if(isAuthenticated){
            return (
                <StripeProvider apiKey={process.env.REACT_APP_PUBLISH_SECRET}>
                <Elements>
                <div style={{margin:'0 auto',maxWidth:'500px',padding:'20px'}}> 
                    <CheckoutHeader />
                    <CheckoutForm submit={submit}/>
                    <CheckoutFooter/>
                </div>      
                </Elements>
                </StripeProvider>
            )
        // }
        // else 
        // return <Redirect to='/account/myaccount' />
    
}
const mapStateToProps = state => ({
    isAuthenticated : !!state.user.token
})

export default connect(mapStateToProps,{checkout})(Checkout)
