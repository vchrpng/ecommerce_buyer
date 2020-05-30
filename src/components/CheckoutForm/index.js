import React from 'react'
import { InputText } from '../Etc/Checkout'
import OrderSummary from '../OrderSummary'
import { ProceedPayment } from '../Etc/Reusable'
import CheckoutNavigate from '../CheckoutNavigate'
// import validate from './validate'
import { connect } from 'react-redux'
import { Formik, Form, 
    // ErrorMessage
 } from 'formik'
import { submitOrder } from '../../actions'
import { OrderFormLayout } from './styled'
import { totalSelector, selectedProducts , selectedSizes } from '../../selectors'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const lockIcon = require('../../assets/lock.svg') 

const initialValues = {
    name:'joe',
    phone:'09203912',
    city:'bkk',
    postcode: '',
    province: 'bkk',
    country:'th'
}
const CheckoutForm = ({ products, total, size, order, submit }) => {
    const elements = useElements();
    const stripe = useStripe();



    async function onSubmit (values) {
        const cardElement = elements.getElement(CardElement)
        const stripetoken = await stripe.createToken(cardElement)
        console.log(stripetoken)
         submit({
            amount:Number(total),
            source: stripetoken.token.id,

            receipt_email:'payment@gmail.eiei'
            // billing_details: {
            //             name: values.name,
            //             email: 'stripe-test-charge@gmail.com',
            //             address: {
            //                 city: values.city,
            //                 country: values.country,
            //             },
            //             phone: values.phone
            //       }
                })

        
        // stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement),
        //     billing_details: {
        //         name: values.name,
        //         email: 'stripe-test-charge@gmail.com',
        //         address: {
        //             city: values.city,
        //             country: values.country,
        //         },
        //         phone: values.phone
        //   }});

    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            // validate={validate}
        >
            {({ isSubmitting, handleSubmit }) => (
                <OrderFormLayout>
                    <Form onSubmit={handleSubmit}>
                        <div className="checkout-box">
                            <aside className="shipping-destination">
                                <h3>Customer Information</h3>
                                <InputText  name={'name'}
                                    placeholder={'Full name'}
                                    type={'text'}
                                />
                                <InputText name={'phone'}
                                    placeholder={'Phone'}
                                    type={'text'}
                                />
                                <h3 style={{marginTop:'0'}}>Shipping Address</h3>
                                <div className="input-group">
                                    <InputText name={'city'}
                                        placeholder={'City'}
                                        type={'text'} 
                                    />
                                    <InputText
                                        name={'province'}
                                        placeholder={'Province'}
                                        type={'text'}
                                    />
                                </div>
                                <div className="input-group">
                                    <InputText  name={'postcode'}
                                            placeholder={'Postcode'}
                                            type={'text'}
                                    />
                                    <InputText 
                                        name={'country'}
                                        placeholder={'Country'}
                                        type={'text'}
                                    />
                                </div>
                            </aside>
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
                                        <OrderSummary 
                                            products={products}
                                            total={total}
                                            size={size}
                                        />
                                    </div>
                                </div>
                                <div className="pay-button">
                                    <ProceedPayment type="submit" disabled={isSubmitting}>
                                        <img className="secure-icon" src={lockIcon} />
                                        <h3>{isSubmitting ? 'LOADING' : `Pay ${total} $`}</h3>
                                    </ProceedPayment>
                                </div>
                            </aside>
                        </div>
                        
                        
                        <div className="confirm-payment">
                            <CheckoutNavigate />
                            
                        </div>
                    </Form>
                </OrderFormLayout>
            )}
        </Formik>
    )
}


const mapStateToProps = state => ({
    products : selectedProducts(state),
    total : totalSelector(state),
    size : selectedSizes(state),
    order : state.products.checkout
})


export default connect(mapStateToProps,{submitOrder})(CheckoutForm)