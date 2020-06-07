import React from 'react'
import { Formik, Form } from 'formik'
 import { InputText } from '../Etc/Checkout'


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
                     <aside className="shipping-destination">
                         <h3>Delivery Address</h3>
                         
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
                     </aside>
                     
                 </div>
                 

             </Form>
            )}
        </Formik>
    )
}


export default ShippingAddressForm