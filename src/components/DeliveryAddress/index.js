import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Modal from '../Modal'
import ShippingAddressForm from '../ShippingAddressForm'
import { DeliveryAddressContainer, AddressBox } from './styled'
import ErrorMessage from '../Etc/ErrorMessage'

const deliveryaddress = require('../../assets/delivery-address.jpg')

    
const DeliveryAddress = ({ onSelectAddress, selectedAddress, error }) => {

    const [isDeliveryFormOpen, toggleDeliveryForm] = React.useState(false)
    const [devlieryFormData, setDeliveryFormData] = React.useState([])


    function removeDeliveryAddress(index) {
        setDeliveryFormData(prev => prev.filter((_,idx) => idx !== index))
    }

    function editDeliveryAddress(index) {

    }

    function addNewDevlieryAddress(newAddress) {
        setDeliveryFormData(prev => [...prev,newAddress])
        onSelectAddress(devlieryFormData.length)
    }



    

    return (
            <DeliveryAddressContainer error={error}>
                <div className="shipping-address-selector">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <ul className="delivery-address-list">
                        {devlieryFormData.map((address,idx) => (
                        <AddressBox onClick={() => onSelectAddress(idx)} key={idx} selected={idx === selectedAddress ? 1 : 0}>
                            <div className="address-box-background">
                                <h4 className="address-type">{address.type}</h4>
                                <div className="address-detail">
                                    <p>{address.name.charAt(0).toUpperCase() + address.name.slice(1)}</p>
                                    <p>{address.line1}</p>
                                    <p>{address.city}</p>
                                    <p>{address.state}</p>
                                    <p>{address.country}</p>
                                    <p>Mobile: {address.phone}</p>
                                </div>
                               
                                <Button basic size="mini" icon>
                                    <Icon name="edit" />Edit
                                </Button> 
                                {devlieryFormData.length > 1 && 
                                <Button onClick={() => removeDeliveryAddress(idx)} basic size="mini" icon>
                                    <Icon name="remove" />Remove
                                </Button>}
                            </div>
                        </AddressBox>
                    ))}
                        <li className="more-address">
                            <div
                                className="add-address-btn"
                                onClick={() => toggleDeliveryForm(true)}>
                                <img className="img" src={deliveryaddress} />
                                <h5 className="add-address-msg">Add new address</h5>
                            </div>
                        </li>
                    </ul>
                </div>
                {isDeliveryFormOpen && 
                <Modal
                    id="modal"
                    isOpen={isDeliveryFormOpen}
                    onClose={toggleDeliveryForm}
                    header="Delivery Address"
                >
                    <ShippingAddressForm onSubmit={addNewDevlieryAddress} />
                </Modal>}
            </DeliveryAddressContainer>
    )
}

export default DeliveryAddress