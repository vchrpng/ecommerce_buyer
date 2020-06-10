import React from 'react'
import styled from 'styled-components'
 import { InputText } from '../Etc/Checkout'
 import CountryList from './country-list'
 import { ProceedPayment } from '../Etc/Reusable'


 const ShippingAddressFormContainer = styled.form`
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

const ShippingAddressForm = () => {
    const [country,setCountry] = React.useState(null)
    return (
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
                            <CountryList setCountry={setCountry}/>
                        </div>
                     </section>
                     <section>
                         <ProceedPayment>Submit</ProceedPayment>
                     </section>
                 </div>
             </ShippingAddressFormContainer>
    )
}


export default ShippingAddressForm