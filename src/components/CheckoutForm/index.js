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
    country:'th',
    shipping: [{
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
                    <h4>Customer Information</h4>
                    <div style={{ height: '100px' }}>

                    </div>
                    <h4>Delivery Address</h4>
                    <div className="shipping-adress-selector">
                        <ul>{initialValues.shipping.map((address) => (
                            <li
                                className="address-box"
                             style={{
                                width: '180px',
                                background: 'gray',
                                padding: '20px',
                            }}>
                                <p>{address.line1}</p>
                                <p>{address.city}</p>
                                <p>{address.state}</p>
                                <p>{address.country}</p>
                            </li>
                        ))}</ul>
                        <div className="more-address">
                            <button
                                className="add-address-btn"
                                style={{
                                    width: '100px',
                                    height: '80px',
                                    background: 'lightgray',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '10px'
                                }}
                            onClick={() => toggleDeliveryForm(true)}>ADD ADDRESS
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
                                <input name="credit-card-checked" checked={true} type="checkbox" />
                                <label for="credit-card-checked">Credit Card</label>
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