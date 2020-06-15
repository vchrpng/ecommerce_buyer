import React from 'react'
import styled from 'styled-components'
import schema from './validate'
 import { InputText } from '../Etc/Checkout'
 import CountryList from './country-list'
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

    function addNewAddressForm() {

    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => onSubmit(values)}
            initialValues={{
                name:'joe',
                phone:'09203912',
                type: 'Work',
                province: 'bkk',
                line1: '543 Amherst Street',
                city: 'Nashua',
                state: 'New Hampshire',
                country: 'United States',
            }}
        >
            {() => (
                <ShippingAddressFormContainer>
                <div className="checkout-box">
                    <section className="shipping-destination">
                       <h3>New Delivery Address</h3>
                       <InputText name={'name'}
                           placeholder={'Full name'}
                           type={'text'}
                       />
                       <InputText name={'phone'}
                           placeholder={'Phone'}
                           type={'text'}
                       />
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
                       <InputText  name={'line1'}
                               placeholder={'Address Line'}
                               type={'text'}
                       />
                           {/* <InputText 
                               name={'country'}
                               placeholder={'Country'}
                               type={'text'}
                           /> */}
                       <div className="country-list-selector">
                           <CountryList/>
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