import React from 'react'
import { InputText , WiderInput } from '../Etc/Checkout'
import OrderSummary from '../OrderSummary'
import { RedButton } from '../Etc/Reusable'
import CheckoutNavigate from '../CheckoutNavigate'
import { Form } from 'semantic-ui-react'

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
            // setTimeout(() =>
            // this.props.submit(this.state.data)
            // .catch(err => this.setState({ 
            //     errors : err.response.data.errors,
            //     loading : false 
            // })),2000) 

            this.props.submit(this.state.data)
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

        const { loading } = this.state
        return (
            <div style={{marginTop:'20px'}}>
                <Form onSubmit={this.onSubmit} loading={loading}>
                <h3>Customer Information</h3>
                <div>
                <InputText
                    name={'fullname'}
                    placeholder={'Full name'}
                    type={'text'}
                    onChange={this.onChange}
                />
                </div>
                <div>
                <InputText
                    name={'phone'}
                    placeholder={'Phone'}
                    type={'text'}
                    onChange={this.onChange}
                />
                 </div>
                <h3 style={{marginTop:'0'}}>Shipping Address</h3>
                <WiderInput>
                    <InputText
                        name={'city'}
                        placeholder={'City'}
                        type={'text'}
                        onChange={this.onChange}
                         
                   />
                    <InputText
                        name={'province'}
                        placeholder={'Province'}
                        type={'text'}
                        onChange={this.onChange}
                         
                    />
                 </WiderInput>
                 <WiderInput>
                    <InputText
                        name={'postcode'}
                        placeholder={'Postcode'}
                        type={'text'}
                        onChange={this.onChange}
                         
                    />
                    <InputText
                        name={'country'}
                        placeholder={'Country'}
                        type={'text'}
                        onChange={this.onChange}
                        
                    />
                </WiderInput>
                <div>
                    <OrderSummary />
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

export default CheckoutForm