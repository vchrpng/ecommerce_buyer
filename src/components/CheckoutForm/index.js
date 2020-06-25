import React from 'react'
import { ProceedPayment } from '../Etc/Reusable'
import CheckoutNavigate from '../CheckoutNavigate'
import { connect } from 'react-redux'
import { submitOrder } from '../../actions'
import { OrderFormContainer, PaymentSelector } from './styled'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import DeliveryAddress from '../DeliveryAddress'
import ErrorMessage from '../Etc/ErrorMessage'
import Loader from 'react-loader-spinner'
import SubmitMessage from '../SubmitMessage'
import { totalSelector } from '../../selectors'


const lockIcon = require('../../assets/lock.svg')
const creditCards = require('../../assets/Minimal Credit Card Icons.svg')
const paypalIcon = require('../../assets/paypal.svg')

const CheckoutForm = ({ submit, total }) => {

    const [selectedAddress, setSelectedAddress]  = React.useState(null)
    const [isCardComplete, setCardComplete]  = React.useState(null)
    const [deliveryFormData, setDeliveryFormData] = React.useState([])
    const [isPaymentSuccess, setPaymentSuccess] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const [errors, setErrors] = React.useState({ 
        address: null,
        card: null
     })

    function onSelectAddress(index) {
        setSelectedAddress(index)
        setErrors(errors => ({ ...errors,  address: null }))
    }

    React.useEffect(() => {
        if (deliveryFormData.length) {
            onSelectAddress(deliveryFormData.length - 1)
        }
    }, [deliveryFormData && deliveryFormData.length])

    const elements = useElements();
    const stripe = useStripe();


    async function onSubmit(e) {
        e.preventDefault()
        if (!selectedAddress && !deliveryFormData.length) {
            setErrors(errors => ({ ...errors, address: 'Please select any address.' }))
        } else {
            setErrors(errors => ({ ...errors, address: null }))
        }

        const cardElement = elements.getElement(CardElement)
        const stripetoken = await stripe.createToken(cardElement)


        if (!isCardComplete || errors.card) {
            return
        } else {
            setLoading(true)
            const values = deliveryFormData[selectedAddress]
            try {
                await submit({
                    amount: Number(total) > 0 ? Number(total) : 100,
                    source: stripetoken.token.id,
                    receipt_email:'stripepayment@gmail.com',
                    shipping: {
                        name: values.name,
                        address: {
                            line1: values.line1,
                            city: values.city + " " + values.state,
                            country: values.country,
                        },
                        phone: values.phone
                    }
                })
                setLoading(false)
                setPaymentSuccess(true)
            } catch(err) {
                alert('error')
            }
        }

    }

    return (
                <OrderFormContainer loading={loading ? 1 : 0} isCardComplete={isCardComplete} errors={errors} onSubmit={onSubmit}>
                    <div className="checkout-form-layout">
                            <h3>Select Delivery Address</h3>
                            <h5>Select or add an address</h5>
                            <DeliveryAddress
                                error={errors.address} 
                                selectedAddress={selectedAddress}
                                onSelectAddress={onSelectAddress} 
                                deliveryFormData={deliveryFormData}
                                setDeliveryFormData={setDeliveryFormData}
                            />
                            <h4 className="payment-detail-title">Payment details</h4>
                            <section className="payment-method">
                            <div className="invoice-detail">
                                <div className="payment-choice">
                                    <PaymentSelector selected={1}>
                                        <img alt="credit-card" style={{ width: '125px' }} src={creditCards} />
                                    </PaymentSelector>
                                    <PaymentSelector disabled={1}>
                                        <img alt="paypal" style={{ width: '80px' }} src={paypalIcon} />
                                    </PaymentSelector>
                                </div>
                                <div className="credit-card">
                                    {errors.card && <ErrorMessage>{errors.card}</ErrorMessage>}
                                    <CardElement  onChange={(e) => {
                                            setErrors(errors => ({
                                                    ...errors,
                                                    card: e.error ? e.error.message : null 
                                                }));
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
                                <ProceedPayment disabled={loading ? 1 : 0} type="submit">
                                    {loading ? <Loader
                                        type="Oval"
                                        color="#ffffff"
                                        height={20}
                                        width={20}
                                        timeout={3000} //3 secs

                                    /> : <React.Fragment>
                                            <img alt="secure-icon" className="secure-icon" src={lockIcon} />
                                            <h3>{`Pay now`}</h3>
                                        </React.Fragment>}
                                   
                                </ProceedPayment>
                            </div>
                        </section>
                    </div>
                    {isPaymentSuccess &&
                    <SubmitMessage onClose={setPaymentSuccess} />}
                </OrderFormContainer>
    )
}


const mapStateToProps = state => ({
    order : state.products.checkout,
    total : totalSelector(state),
})


export default connect(mapStateToProps,{submitOrder})(CheckoutForm)