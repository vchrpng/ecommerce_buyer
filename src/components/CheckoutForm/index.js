import React from 'react'
import { ProceedPayment } from '../Etc/Reusable'
import CheckoutNavigate from '../CheckoutNavigate'
import validationSchema from './validate'
import { connect } from 'react-redux'
import { Formik, 
    ErrorMessage
 } from 'formik'
import { InputText } from '../Etc/Checkout'
import { submitOrder } from '../../actions'
import { OrderFormLayout, PaymentSelector, AddressBox } from './styled'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import ShippingAddressForm from '../ShippingAddressForm'
import Modal from '../Modal'

const lockIcon = require('../../assets/lock.svg')
const creditCards = require('../../assets/Minimal Credit Card Icons.svg')
const paypalIcon = require('../../assets/paypal.svg')

const initialValues = {
    name:'joe',
    phone:'09203912',
    city:'bkk',
    line1: '',
    province: 'bkk',
    country:'th',
    shipping: [{
        type: 'Work',
        line1: '543 Amherst Street',
        city: 'Nashua',
        state: 'New Hampshire',
        country: 'United States',
    }]
}
const CheckoutForm = () => {
    const elements = useElements();
    const stripe = useStripe();

    const [devlieryFormData,setDeliveryFormData] = React.useState({
                    // name: '',
                    // address: {
                        line1: '543 Amherst Street',
                        city: 'Nashua',
                        state: 'New Hampshire',
                        country: 'United States',
                    // },
                    // phone: ''
    })

    const [isDeliveryFormOpen, toggleDeliveryForm] = React.useState(false)



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
                    <aside className="customer-invoice">
                  
                    <h4>Delivery Address</h4>
                    <div className="shipping-adress-selector">
                        <ul>{initialValues.shipping.map((address,idx) => (
                            <AddressBox index={idx} selected={idx === 0 ? 1 : 0}>
                                <h4>{address.type}</h4>
                                <p>{address.line1}</p>
                                <p>{address.city}</p>
                                <p>{address.state}</p>
                                <p>{address.country}</p>
                            </AddressBox>
                        ))}</ul>
                        <div className="more-address">
                            <button
                                className="add-address-btn"
                                onClick={() => toggleDeliveryForm(true)}>+
                            </button>
                        </div>
                    </div>
                    </aside>

                    {isDeliveryFormOpen && 
                        <Modal
                            id="modal"
                            isOpen={isDeliveryFormOpen}
                            onClose={toggleDeliveryForm}
                            header="Delivery Address"
                        >
                            <ShippingAddressForm onSubmit={setDeliveryFormData} />
                        </Modal>}
                        <h4>Payment details</h4>

                        <aside className="payment-method">
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
                         
                     </aside>
                                      
                    <div className="confirm-payment">
                        <CheckoutNavigate />
                        <div className="pay-button">
                             <ProceedPayment type="submit" disabled={isSubmitting}>
                                 <img className="secure-icon" src={lockIcon} />
                                 <h3>{isSubmitting ? 'LOADING' : `Pay now`}</h3>
                             </ProceedPayment>
                         </div>
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