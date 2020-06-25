import React from 'react'
import styled from 'styled-components'
import schema from './validate'
 import { InputText } from '../Etc/Checkout'
 import { Select, CountryList } from './country-list'
 import { ProceedPayment } from '../Etc/Reusable'
 import { Form, Formik, ErrorMessage } from 'formik'


 const ShippingAddressFormContainer = styled(Form)`
    padding: 0 60px;

    .shipping-destination {

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
                province: '',
                line1: '',
                city: '',
                state: 'New York',
                country: 'United States',
            }}
        >
            {({ errors, touched }) => (
                <ShippingAddressFormContainer>
                <div className="checkout-box">
                    <section className="shipping-destination">
                        <h3>{defaultValue ? 'Edit' : 'New'} Delivery Address</h3>
                        <span className="error-msg"><ErrorMessage name="type"/></span>
                        <InputText name={'type'}
                            placeholder={'Address type'}
                            type={'text'}
                        />
                        <span className="error-msg"><ErrorMessage name="name"/></span>
                        <InputText name={'name'}
                            placeholder={'Full name'}
                            type={'text'}
                        />
                        <span className="error-msg"><ErrorMessage name="phone"/></span>
                        <InputText name={'phone'}
                            placeholder={'Phone'}
                            type={'text'}
                        />
                        <div className="input-group">
                            <span className="error-msg"><ErrorMessage name="city"/></span>
                            <InputText name={'city'}
                                placeholder={'City'}
                                type={'text'} 
                            />
                            <span className="error-msg"><ErrorMessage name="province"/></span>
                            <InputText
                                name={'province'}
                                placeholder={'Province'}
                                type={'text'}
                            />
                        </div>
                        <span className="error-msg"><ErrorMessage name="line1"/></span>
                        <InputText  
                            name={'line1'}
                            placeholder={'Address Line'}
                            type={'text'}
                        />
                           {/* <InputText 
                               name={'country'}
                               placeholder={'Country'}
                               type={'text'}
                           /> */}
                        <div className="country-list-selector">
                            <Select as="select" name="country" >
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