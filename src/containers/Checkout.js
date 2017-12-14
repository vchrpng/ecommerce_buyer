import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutHeader from '../components/CheckoutHeader'
import CheckoutFooter from '../components/CheckoutFooter'
import { connect } from 'react-redux'
import { checkout } from '../actions'


const Checkout = ({ checkout , history }) => {
      const submit = data => {
          return checkout(data).then(() => history.push('/'))
        }
        return (
            <div style={{margin:'0 auto',maxWidth:'500px',padding:'20px'}}> 
                <CheckoutHeader />
                <CheckoutForm submit={submit}/>
                <CheckoutFooter/>
            </div>      
        )
    
}


export default connect(null,{checkout})(Checkout)
