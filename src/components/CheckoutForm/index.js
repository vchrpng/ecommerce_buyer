import React from 'react'
import { InputText } from '../Etc/Checkout'
import OrderSummary from '../OrderSummary'
import { RedButton } from '../Etc/Reusable'
import CheckoutNavigate from '../CheckoutNavigate'
import validate from './validate'
import { connect } from 'react-redux'
import { Formik, Form, ErrorMessage } from 'formik'
import { submitOrder } from '../../actions'
import { totalSelector, selectedProducts , selectedSizes } from '../../selectors'
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    injectStripe
  } from 'react-stripe-elements'

const initialValues = {
    fullname:'',
    phone:'',
    city:'',
    postcode: '',
    province:'',
    country:''
}
class CheckoutForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            loading:false,
            errors:{}
        }
    }

    onChange = e => {
        this.setState({ 
            data : { ...this.state.data,[e.target.name] : e.target.value }
        })
    }

    onSubmit = async (values) => {
        const stripeCharge = await this.props.stripe.createToken()

            setTimeout(() => 
            this.props.submit({
                amount: '1120',
                source: stripeCharge.token.id,
                receipt_email:'payment@gmail.eiei'
            })
                // this.props.submit({...this.props.order, source: token.id })
                .catch(err => this.setState({ 
                    errors : err.response.data.errors,
                    loading : false 
                    }))
                ,2000) 
    }

    
    render(){
        const {products,total,size} = this.props
        const { loading } = this.state
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={this.onSubmit}
                validate={validate}
            >
                {({ isSubmitting }) => (
                    <div style={{marginTop:'20px'}}>
                        <Form onSubmit={this.onSubmit} loading={loading}>
                            <h3>Customer Information</h3>
                            <InputText  name={'fullname'}
                                placeholder={'Full name'}
                                type={'text'}
                            />
                            <InputText name={'phone'}
                                placeholder={'Phone'}
                                type={'text'}
                            />
                            <h3 style={{marginTop:'0'}}>Shipping Address</h3>
                            <div>
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
                            <div>
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
                            <div>
                            <label>
                                Card details
                                <CardNumberElement />
                                </label>
                                <label>
                                Expiration date
                                <CardExpiryElement />
                                </label>
                                <label>
                                CVC
                                <CardCVCElement />
                                </label>
                            </div>
                            <div>
                                <OrderSummary 
                                    products={products}
                                    total={total}
                                    size={size}
                                />
                            </div>
                            <div style={{display:'flex',margin:'25px 0'}}>
                                <CheckoutNavigate />
                                <div style={{width:'40%'}}>
                                    <RedButton>{isSubmitting ? 'LOADING' : 'CONFIRM ORDER'}</RedButton>
                                </div>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        )
    }
}
const mapStateToProps = state => ({
    products : selectedProducts(state),
    total : totalSelector(state),
    size : selectedSizes(state),
    order : state.products.checkout
})


export default connect(mapStateToProps,{submitOrder})(injectStripe(CheckoutForm))