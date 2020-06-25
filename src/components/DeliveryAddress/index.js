import React from 'react'
import { Icon } from 'semantic-ui-react'
import Modal from '../Modal'
import ShippingAddressForm from '../ShippingAddressForm'
import { DeliveryAddressContainer, AddressBox } from './styled'
import ErrorMessage from '../Etc/ErrorMessage'

const DELIVERY_FORM_ACTIONS = {
    ADD : 'ADD',
    EDIT: 'EDIT'
}

const DeliveryAddress = ({ 
    onSelectAddress, 
    selectedAddress, 
    error, 
    deliveryFormData,
    setDeliveryFormData
 }) => {
    const [formAction, setFormAction] = React.useState(null)
    const [defaultValue, setDefaultValue] = React.useState(null)

    function removeDeliveryAddress(index) {
        setDeliveryFormData(prev => prev.filter((_,idx) => idx !== index))
    }

    function onAddDeliveryAddress() {
        setDefaultValue(null)
        setFormAction(DELIVERY_FORM_ACTIONS.ADD)
    }

    function editDeliveryAddress(index) {
        setDefaultValue(deliveryFormData[index])
        setFormAction(DELIVERY_FORM_ACTIONS.EDIT)
    }

    function onSubmit(newAddress,index) {
        switch (formAction) {
            case DELIVERY_FORM_ACTIONS.EDIT :
                setDeliveryFormData(prev => [
                    ...prev.concat(index),
                    prev[index],
                    prev.concat(index + 1)
                ])
                break
            case DELIVERY_FORM_ACTIONS.ADD :
                setDeliveryFormData(prev => [...prev,newAddress])
                break
            default :
                break
        }
        setFormAction(null)
        setDefaultValue(null)
    }


    return (
            <DeliveryAddressContainer error={error}>
                <div className="shipping-address-selector">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <ul className="delivery-address-list">
                        {deliveryFormData.length ? deliveryFormData.map((address,idx) => (
                        <AddressBox onClick={() => onSelectAddress(idx)} key={idx} selected={idx === selectedAddress}>
                            <div className="address-box-background">
                                <h4 className="address-type">{address.type}</h4>
                                <div className="address-information">
                                    <div className="address-detail">
                                        <p>{address.name.charAt(0).toUpperCase() + address.name.slice(1)}</p>
                                        <p>{address.line1} {address.city} {address.state}</p>
                                        <p>{address.country}</p>
                                        <p>Mobile: {address.phone}</p>
                                    </div>
                                    <div className="address-actions">
                                        <span><Icon onClick={() => editDeliveryAddress(idx)} name="edit" /></span>
                                        {deliveryFormData.length > 1 && 
                                        <span>
                                            <Icon onClick={() => removeDeliveryAddress(idx)} name="remove" />
                                        </span>}
                                    </div>
                                </div>
                            </div>
                        </AddressBox>
                    )): null }
                        <li className="more-address">
                            <div
                                className="add-address-btn"
                                onClick={() => onAddDeliveryAddress()}>
                                <h5 className="add-address-msg">Add new address</h5>
                            </div>
                        </li>
                    </ul>
                </div>
                {formAction + ''}
                {formAction && 
                <Modal
                    id="modal"
                    isOpen={!!formAction}
                    onClose={() => setFormAction(null)}
                    header="Delivery Address"
                >
                    <ShippingAddressForm defaultValue={defaultValue} onSubmit={onSubmit} />
                </Modal>}
            </DeliveryAddressContainer>
    )
}

export default DeliveryAddress