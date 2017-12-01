import React from 'react'
import { RenderInputText } from '../Etc/Checkout'

const ShippingForm = () => {
    return (
        <div
        style={{
            paddingTop:'1.5em'
        }}
        >
        <h3>Customer Information</h3>

        <RenderInputText
        placeholder={'Full name'}
        type={'text'}
        />
        <RenderInputText
        placeholder={'Email'}
        type={'email'}
        />
        <RenderInputText
        placeholder={'Phone'}
        type={'number'}
        />
        <h3>Shipping Address</h3>
        <RenderInputText
        placeholder={'City'}
        type={'text'}
        />
        <RenderInputText
        placeholder={'Province'}
        type={'text'}
        />
        <RenderInputText
        placeholder={'Postcode'}
        type={'number'}
        />
        <RenderInputText
        placeholder={'Country'}
        type={'text'}
        />
        <h3>Order Summary</h3>

        </div>
    )
}

export default ShippingForm