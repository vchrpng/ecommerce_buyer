import React from 'react'
import { Button } from 'semantic-ui-react'
import Modal from '../Modal'
import ShippingAddressForm from '../ShippingAddressForm'
import { DeliveryAddressContainer, AddressBox } from './styled'


const initialValues = {

    city:'bkk',
    line1: '',
    province: 'bkk',
    country:'th',
    shipping: [{
        name:'joe',
        phone:'09203912',
        type: 'Work',
        line1: '543 Amherst Street',
        city: 'Nashua',
        state: 'New Hampshire',
        country: 'United States',
    }]
}


const DeliveryAddress = () => {

    const [isDeliveryFormOpen, toggleDeliveryForm] = React.useState(false)

    
    const [devlieryFormData,setDeliveryFormData] = React.useState({
        // name: '',
        // address: {
            line1: '543 Amherst Street',
            city: 'Nashua',
            state: 'New Hampshire',
            country: 'United States',
        // },
        // phone: ''
    })

    return (
        <React.Fragment>
            <DeliveryAddressContainer>
                <h4>Delivery Address</h4>
                <div className="shipping-adress-selector">
                    <ul>{initialValues.shipping.map((address,idx) => (
                        <AddressBox index={idx} selected={idx === 0 ? 1 : 0}>
                            <h4>{address.type}</h4>
                            <div className="address-detail"></div>
                            <p>{address.name.charAt(0).toUpperCase() + address.name.slice(1)}</p>
                            <p>{address.line1}</p>
                            <p>{address.city}</p>
                            <p>{address.state}</p>
                            <p>{address.country}</p>
                            <h5>Mobile: {address.phone}</h5>
                            <Button basic size="mini" icon="edit">Edit</Button> 
                            <Button basic size="mini" icon="remove">Remove</Button>
                        </AddressBox>
                    ))}</ul>
                    <div className="more-address">
                        <button
                            className="add-address-btn"
                            onClick={() => toggleDeliveryForm(true)}>+
                        </button>
                    </div>
                </div>
            </DeliveryAddressContainer>

            {isDeliveryFormOpen && 
                <Modal
                    id="modal"
                    isOpen={isDeliveryFormOpen}
                    onClose={toggleDeliveryForm}
                    header="Delivery Address"
                >
                    <ShippingAddressForm onSubmit={setDeliveryFormData} />
                </Modal>}
        </React.Fragment>
        
    )
}

export default DeliveryAddress