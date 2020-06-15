import React from 'react'
import { ProceedPayment } from '../Etc/Reusable'
import CheckoutNavigate from '../CheckoutNavigate'
import { connect } from 'react-redux'
import { submitOrder } from '../../actions'
import { OrderFormContainer, PaymentSelector } from './styled'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import DeliveryAddress from '../DeliveryAddress'

const lockIcon = require('../../assets/lock.svg')
const creditCards = require('../../assets/Minimal Credit Card Icons.svg')
const paypalIcon = require('../../assets/paypal.svg')

const CheckoutForm = () => {
    const [selectedAddress, setSelectedAddress]  = React.useState(null)
    const [isCardComplete, setCardComplete]  = React.useState(null)
    const [errors, setErrors] = React.useState({ 
        address: 'Please select an address',
        card: null
     })

    function onSelectAddress(index) {
        setSelectedAddress(index)
        setErrors(errors => ({ ...errors,  address: null }))
    }

    const elements = useElements();
    const stripe = useStripe();


    async function onSubmit(e) {
        e.preventDefault()

        const cardElement = elements.getElement(CardElement)
        const stripetoken = await stripe.createToken(cardElement)

        if (errors.address) {

        }

        if (errors.card) {

        }



        
  

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
                <OrderFormContainer errors={errors} onSubmit={onSubmit}>
                    <div className="checkout-form-layout">
                            <h4>Delivery Address</h4>
                            <DeliveryAddress 
                                selectedAddress={selectedAddress}
                                onSelectAddress={onSelectAddress} 
                            />
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
                                    <CardElement  onChange={(e) => {
                                            if (e.error) {
                                                setErrors(errors => ({...errors,card: e.error.message}));
                                            }
                                            setCardComplete(e.complete);
                                        }} 
                                        options={{
                                        style: {
                                            fontWeight: 500,
                                            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                                            fontSize: '16px',
                                            fontSmoothing: 'antialiased',
                                            ':-webkit-autofill': {
                                              color: '#fce883',
                                            },
                                            base: { fontSize: '16px', color: 'black',
                                            '::placeholder': {color: 'lightgray' },
                                            },
                                            invalid: { 
                                                iconColor: '#ffc7ee',
                                                color: '#9e2146' },
                                        }}}
                                    />
                                </div>
                            </div>
                            
                        </section>
                                            
                        <section className="confirm-payment">
                            <CheckoutNavigate />
                            <div className="pay-button">
                                {errors.card && <span>{errors.card}</span>}
                                <ProceedPayment disabled={errors.address || !isCardComplete} type="submit">
                                    <img className="secure-icon" src={lockIcon} />
                                    <h3>{`Pay now`}</h3>
                                </ProceedPayment>
                            </div>
                        </section>
                    </div>
                </OrderFormContainer>
    )
}


const mapStateToProps = state => ({
    order : state.products.checkout
})


export default connect(mapStateToProps,{submitOrder})(CheckoutForm)