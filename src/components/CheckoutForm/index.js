import React from 'react'
import { ProceedPayment } from '../Etc/Reusable'
import CheckoutNavigate from '../CheckoutNavigate'
import validationSchema from './validate'
import { connect } from 'react-redux'
import { Formik, Form, 
    ErrorMessage
 } from 'formik'
import { submitOrder } from '../../actions'
import { OrderFormLayout } from './styled'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import ShippingAddressForm from '../ShippingAddressForm'
import Modal from '../Modal'

const lockIcon = require('../../assets/lock.svg') 

const initialValues = {
    name:'joe',
    phone:'09203912',
    city:'bkk',
    line1: '',
    province: 'bkk',
    country:'th'
}
const CheckoutForm = () => {
    const elements = useElements();
    const stripe = useStripe();

    const [isDeliveryAddressOpen, toggleDeliveryAddressForm] = React.useState(false)



    async function onSubmit (values) {
        alert('test submit')
        // const cardElement = elements.getElement(CardElement)
        // const stripetoken = await stripe.createToken(cardElement)

        //  submit({
        //     amount:Number(total) > 0 ? Number(total) : 100,
        //     source: stripetoken.token.id,
        //     receipt_email:'stripepayment@gmail.com',
        //     shipping: {
        //         name: values.name,
        //         address: {
        //             line1: '49/47',
        //             city: values.city,
        //             country: values.country,
        //         },
        //         phone: values.phone
        //     }
        // })
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting, handleSubmit, errors, touched }) => (
                <OrderFormLayout>
                         <button onClick={() => toggleDeliveryAddressForm(true)}>ADD ADDRESS</button>

                    {isDeliveryAddressOpen && 
                        <Modal
                            id="modal"
                            isOpen={isDeliveryAddressOpen}
                            onClose={toggleDeliveryAddressForm}
                            header="Delivery Address"
                        >
                            <ShippingAddressForm  />
                        </Modal>}
                        <aside className="payment-method">
                         <div className="invoice-detail">
                             <div className="credit-card">
                                 <CardElement options={{
                                     style: {
                                         base: { fontSize: '16px', color: '#424770',
                                         '::placeholder': {color: '#aab7c4' },
                                         },
                                         invalid: { color: '#9e2146' },
                                     }}}
                                 />
                             </div>
                             <div >

                             </div>
                         </div>
                         <div className="pay-button">
                             <ProceedPayment type="submit" disabled={isSubmitting}>
                                 {/* <img className="secure-icon" src={lockIcon} /> */}
                                 <h3>{isSubmitting ? 'LOADING' : `Pay now`}</h3>
                             </ProceedPayment>
                         </div>
                     </aside>
                                      
                    <div className="confirm-payment">
                        <CheckoutNavigate />
                        
                    </div>
                </OrderFormLayout>
            )}
        </Formik>
    )
}


const mapStateToProps = state => ({
  
    order : state.products.checkout
})


export default connect(mapStateToProps,{submitOrder})(CheckoutForm)