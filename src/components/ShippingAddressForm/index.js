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

const ShippingAddressForm = ({ onSubmit }) => {

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => onSubmit(values)}
            initialValues={{
                name:'joe',
                phone:'092039120',
                type: 'Work',
                province: 'bkk',
                line1: '543 Amherst Street',
                city: 'Nashua',
                state: 'New Hampshire',
                country: 'United States',
            }}
        >
            {({ errors, touched }) => (
                <ShippingAddressFormContainer>
                <div className="checkout-box">
                    <section className="shipping-destination">
                        <h3>New Delivery Address</h3>
                        <ErrorMessage name="name"/>
                        <InputText name={'name'}
                            placeholder={'Full name'}
                            type={'text'}
                        />
                        <ErrorMessage name="phone"/>
                        <InputText name={'phone'}
                            placeholder={'Phone'}
                            type={'text'}
                        />
                        <div className="input-group">
                            <ErrorMessage name="city"/>
                            <InputText name={'city'}
                                placeholder={'City'}
                                type={'text'} 
                            />
                            <ErrorMessage name="province"/>
                            <InputText
                                name={'province'}
                                placeholder={'Province'}
                                type={'text'}
                            />
                        </div>
                        <ErrorMessage name="line1"/>
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