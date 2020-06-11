import React from 'react'
import { ProceedPayment } from '../Etc/Reusable'
import CheckoutNavigate from '../CheckoutNavigate'
import validationSchema from './validate'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { submitOrder } from '../../actions'
import { OrderFormContainer, PaymentSelector, AddressBox } from './styled'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import DeliveryAddress from '../DeliveryAddress'

const lockIcon = require('../../assets/lock.svg')
const creditCards = require('../../assets/Minimal Credit Card Icons.svg')
const paypalIcon = require('../../assets/paypal.svg')

const CheckoutForm = () => {
    const elements = useElements();
    const stripe = useStripe();


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
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting, handleSubmit, errors, touched }) => (
                <OrderFormContainer>
                    <div className="checkout-form-layout">
                            <h4>Delivery Address</h4>
                            <DeliveryAddress />
                            <h4>Payment details</h4>

                            <section className="payment-method">
                            <div className="invoice-detail">
                                <div className="payment-choice">
                                    <PaymentSelector selected={1}>
                                        <img style={{ width: '125px' }} src={creditCards} />
                                    </PaymentSelector>
                                    <PaymentSelector disabled={1}>
                                        <img style={{ width: '80px' }} src={paypalIcon} />
                                    </PaymentSelector>
                                </div>
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
                            </div>
                            
                        </section>
                                            
                        <section className="confirm-payment">
                            <CheckoutNavigate />
                            <div className="pay-button">
                                <ProceedPayment type="submit" disabled={isSubmitting}>
                                    <img className="secure-icon" src={lockIcon} />
                                    <h3>{isSubmitting ? 'LOADING' : `Pay now`}</h3>
                                </ProceedPayment>
                            </div>
                        </section>
                    </div>
                </OrderFormContainer>
            )}
        </Formik>
    )
}


const mapStateToProps = state => ({
  
    order : state.products.checkout
})


export default connect(mapStateToProps,{submitOrder})(CheckoutForm)