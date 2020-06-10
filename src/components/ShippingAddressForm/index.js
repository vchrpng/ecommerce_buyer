import React from 'react'
 import { InputText } from '../Etc/Checkout'
 import CountryList from './country-list'
 import { ProceedPayment } from '../Etc/Reusable'


const ShippingAddressForm = () => {
    const [country,setCountry] = React.useState(null)
    return (
            <form>
                 <div className="checkout-box">
                     <section className="shipping-destination">
                         <h3>New Delivery Address</h3>
                         <div className="input-group">
                            <h4>Customer Information</h4>
                                <InputText name={'name'}
                                    placeholder={'Full name'}
                                    type={'text'}
                                />
                                <InputText name={'phone'}
                                    placeholder={'Phone'}
                                    type={'text'}
                                />
                         </div>
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
                         <div className="input-group">
                             <InputText  name={'line1'}
                                     placeholder={'Address Line'}
                                     type={'text'}
                             />
                             {/* <InputText 
                                 name={'country'}
                                 placeholder={'Country'}
                                 type={'text'}
                             /> */}
                             <CountryList setCountry={setCountry}/>
                         </div>
                     </section>
                     <section>
                         <ProceedPayment>Submit</ProceedPayment>
                     </section>
                 </div>
             </form>
    )
}


export default ShippingAddressForm