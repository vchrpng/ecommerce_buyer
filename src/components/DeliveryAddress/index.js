import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Modal from '../Modal'
import ShippingAddressForm from '../ShippingAddressForm'
import { DeliveryAddressContainer, AddressBox } from './styled'

const deliveryaddress = require('../../assets/delivery-address.jpg')
const initialValues = [{
        name:'joe',
        phone:'09203912',
        type: 'Work',
        province: 'bkk',
        line1: '543 Amherst Street',
        city: 'Nashua',
        state: 'New Hampshire',
        country: 'United States',
    }]



const DeliveryAddress = () => {

    const [isDeliveryFormOpen, toggleDeliveryForm] = React.useState(false)

    function removeDeliveryAddress(index) {

    }

    function editDeliveryAddress(index) {

    }

    function addNewDevlieryAddress(newAddress) {
        setDeliveryFormData(prev => [...prev,newAddress])
    }

    
    const [devlieryFormData,setDeliveryFormData] = React.useState(initialValues)

    return (
            <DeliveryAddressContainer>
                <div className="shipping-address-selector">
                    <ul className="delivery-address-list">
                        {devlieryFormData.map((address,idx) => (
                        <AddressBox key={idx} selected={idx === 0 ? 1 : 0}>
                            <div className="address-box-background">
                                <h4>{address.type}</h4>
                                <div className="address-detail"></div>
                                <p>{address.name.charAt(0).toUpperCase() + address.name.slice(1)}</p>
                                <p>{address.line1}</p>
                                <p>{address.city}</p>
                                <p>{address.state}</p>
                                <p>{address.country}</p>
                                <p>Mobile: {address.phone}</p>
                                <Button basic size="mini" icon>
                                    <Icon name="edit" />Edit
                                </Button> 
                                <Button basic size="mini" icon>
                                    <Icon name="remove" />Remove
                                </Button>
                            </div>
                        </AddressBox>
                    ))}
                        <li className="more-address">
                            <div
                                className="add-address-btn"
                                onClick={() => toggleDeliveryForm(true)}>
                                <img className="img" src={deliveryaddress} />
                                <p>Add new address</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {true && 
                <Modal
                    id="modal"
                    isOpen={true}
                    onClose={toggleDeliveryForm}
                    header="Delivery Address"
                >
                    <ShippingAddressForm onSubmit={addNewDevlieryAddress} />
                </Modal>}
            </DeliveryAddressContainer>
    )
}

export default DeliveryAddress