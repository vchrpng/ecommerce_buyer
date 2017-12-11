import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutHeader from '../components/CheckoutHeader'
import CheckoutFooter from '../components/CheckoutFooter'
import { connect } from 'react-redux'
import { checkout } from '../actions'


const Checkout = ({ submit , checkout }) => {
      submit = data => checkout(data)
    //   .then(() => this.props.history.push('/'))
        return (
            <div style={{margin:'0 auto',maxWidth:'500px'}}> 
                <CheckoutHeader />
                <CheckoutForm submit={submit}/>
                <CheckoutFooter/>
            </div>      
        )
    
}

export default connect(null,{checkout})(Checkout)
