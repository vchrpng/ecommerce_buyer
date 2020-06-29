import React from 'react'
import styled from 'styled-components'
import schema from './validate'
 import { InputText } from '../Etc/Checkout'
 import { Select, CountryList } from './country-list'
 import { ProceedPayment } from '../Etc/Reusable'
 import { ErrorMessageStyle } from '../Etc/ErrorMessage'
 import { Form, Formik, ErrorMessage } from 'formik'


 const ShippingAddressFormContainer = styled(Form)`
    padding: 0 60px;

    .shipping-destination {
        .input {
            position:relative;

            .error-msg {
                position:absolute;
                color:red;
            }
        }

        .input-group {
            display:flex;
            > input {
                &:nth-child(1) {
                    margin-right:10px;
                }
            }
        }

        .country-list-selector {
            margin-bottom: 20px;
        }
    }
 
 `

const ShippingAddressForm = ({ onSubmit, defaultValue }) => {

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => onSubmit(values)}
            initialValues={defaultValue || {
                name:'',
                phone:'',
                type: '',
                line1: '',
                city: '',
                state: '',
                country: 'United States',
            }}
        >
            {({ errors, touched }) => (
                <ShippingAddressFormContainer>
                <div className="checkout-box">
                    <section className="shipping-destination">
                        <h3>{defaultValue ? 'Edit' : 'New'} Delivery Address</h3>
                        <div className="input">
                            <ErrorMessage component={ErrorMessageStyle} name="type"/>
                            <InputText name={'type'}
                                placeholder={'Address type'}
                                type={'text'}
                            />
                        </div>
                        <div className="input">
                            <ErrorMessage component={ErrorMessageStyle} name="name"/>
                            <InputText name={'name'}
                                placeholder={'Full name'}
                                type={'text'}
                            />
                        </div>
                        <div className="input">
                            <ErrorMessage component={ErrorMessageStyle} name="phone"/>
                            <InputText name={'phone'}
                                placeholder={'Phone'}
                                type={'text'}
                            />
                        </div>
                        
                        <div className="input-group">
                            <div className="input">
                                <ErrorMessage component={ErrorMessageStyle} name="city"/>
                                <InputText name={'city'}
                                    placeholder={'City'}
                                    type={'text'} 
                                />
                            </div>
                            <div className="input">
                                <ErrorMessage component={ErrorMessageStyle} name="state"/>
                                <InputText
                                    name={'state'}
                                    placeholder={'State'}
                                    type={'text'}
                                />
                            </div>
                        </div>
                            
                        <div className="input">
                            <ErrorMessage component={ErrorMessageStyle} name="line1"/>
                            <InputText  
                                name={'line1'}
                                placeholder={'Address Line'}
                                type={'text'}
                            />
                        </div>
                        <div className="country-list-selector">
                            <Select component="select" name="country" >
                                <CountryList/>
                            </Select>
                        </div>
                    </section>
                    <section>
                        <ProceedPayment type="submit">Submit</ProceedPayment>
                    </section>
                </div>
            </ShippingAddressFormContainer>
            )}
        </Formik>
            
    )
}


export default ShippingAddressForm