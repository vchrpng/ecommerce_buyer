import React from 'react'
import { RenderInputText , WiderInput } from '../Etc/Checkout'

const ShippingForm = () => {
    return (
        <div>
            <h3>Customer Information</h3>
            <div>
            <RenderInputText
                placeholder={'Full name'}
                type={'text'}
            />
            </div>
            <div>
            <RenderInputText
                placeholder={'Email'}
                type={'email'}
            />
             </div>
            <div>
            <RenderInputText
                placeholder={'Phone'}
                type={'text'}
            />
             </div>
            <h3>Shipping Address</h3>
            <WiderInput>
                <RenderInputText
                    placeholder={'City'}
                    type={'text'}
                />
                <RenderInputText
                    placeholder={'Province'}
                    type={'text'}
                />
             </WiderInput>
             <WiderInput>
                <RenderInputText
                    placeholder={'Postcode'}
                    type={'text'}
                />
                <RenderInputText
                    placeholder={'Country'}
                    type={'text'}
                />
            </WiderInput>
        
        </div>
    )
}

export default ShippingForm