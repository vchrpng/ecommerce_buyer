import React from 'react'
import PropTypes from 'prop-types'
import { InputText } from '../Etc/Checkout'
import OrderSummary from '../OrderSummary'
import { RedButton } from '../Etc/Reusable'
import CheckoutNavigate from '../CheckoutNavigate'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { submitOrder } from '../../actions'
import { totalSelector, selectedProducts , selectedSizes } from '../../selectors'

class CheckoutForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data : {
                fullname:'',
                phone:'',
                city:'',
                postcode: '',
                province:'',
                country:''
            },
            loading:false,
            errors:{}
        }
    }

    onChange = e => {
        this.setState({ 
            data : { ...this.state.data,[e.target.name] : e.target.value }
        })
    }
    onSubmit = () => {
        const errors = this.validate(this.state.data)
        this.setState({ errors })
        if (Object.keys(errors).length === 0){
            this.setState({ loading : true })
            this.props.submitOrder(this.state.data)
            setTimeout(() => 
                this.props.submit(this.props.order)
                .catch(err => this.setState({ 
                    errors : err.response.data.errors,
                    loading : false 
                    }))
                ,2000) 

 
        }
    }
    validate = data => {
        const errors = {}
        if(!data.fullname) errors.fullname = "Required Field"
        if(!data.phone) errors.phone = "Required Field"
        if(!data.city) errors.city = "Required Field"
        if(!data.postcode) errors.postcode = "Required Field"
        if(!data.province) errors.province = "Required Field"
        if(!data.country) errors.country = "Required Field"
        return errors
    }
    render(){
        const {products,total,size} = this.props
        const { loading } = this.state
        return (
            <div style={{marginTop:'20px'}}>
                <Form onSubmit={this.onSubmit} loading={loading}>
                <h3>Customer Information</h3>
                <Form.Field>
                <InputText
                    name={'fullname'}
                    placeholder={'Full name'}
                    type={'text'}
                    onChange={this.onChange}
                />
                </Form.Field>
                <Form.Field>
                <InputText
                    name={'phone'}
                    placeholder={'Phone'}
                    type={'text'}
                    onChange={this.onChange}
                />
                 </Form.Field>
                <h3 style={{marginTop:'0'}}>Shipping Address</h3>
                <Form.Group>
                    <Form.Field width={8}>
                    <InputText
                        name={'city'}
                        placeholder={'City'}
                        type={'text'}
                        onChange={this.onChange}
                         
                   />
                   </Form.Field>
                   <Form.Field width={8}>
                    <InputText
                        name={'province'}
                        placeholder={'Province'}
                        type={'text'}
                        onChange={this.onChange}
                         
                    />
                    </Form.Field>
                 </Form.Group>
                 <Form.Group>
                 <Form.Field width={8}>
                    <InputText
                        name={'postcode'}
                        placeholder={'Postcode'}
                        type={'text'}
                        onChange={this.onChange}
                         
                    />
                </Form.Field>
                <Form.Field width={8}>
                    <InputText
                        name={'country'}
                        placeholder={'Country'}
                        type={'text'}
                        onChange={this.onChange}
                        
                    />
                </Form.Field>
                </Form.Group>
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
                        <RedButton>CONFIRM ORDER</RedButton>
                    </div>
                </div>
                </Form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products : selectedProducts(state),
    total : totalSelector(state),
    size : selectedSizes(state),
    order : state.products.checkout
})
CheckoutForm.PropTypes = {
    product : PropTypes.array.isRequired,
    total : PropTypes.number.isRequired,
    size : PropTypes.array.isRequired
}

export default connect(mapStateToProps,{submitOrder})(CheckoutForm)