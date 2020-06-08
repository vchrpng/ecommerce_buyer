import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
 import { InputText } from '../Etc/Checkout'
 import { ProceedPayment } from '../Etc/Reusable'


const ShippingAddressForm = () => {
    return(
        <Formik>
            {() => (
                 <Form 
                //  onSubmit={
                    //  handleSubmit
                    //  }
                     >
                 <div className="checkout-box">
                     <section className="shipping-destination">
                         <h3>New Delivery Address</h3>
                         <div className="input-group">
                            <h4>Customer Information</h4>
                            <ErrorMessage name="name" />
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
                             <InputText 
                                 name={'country'}
                                 placeholder={'Country'}
                                 type={'text'}
                             />
                         </div>
                     </section>
                     <section>
                         <ProceedPayment>Submit</ProceedPayment>
                     </section>
                     
                 </div>
                 

             </Form>
            )}
        </Formik>
    )
}


export default ShippingAddressForm