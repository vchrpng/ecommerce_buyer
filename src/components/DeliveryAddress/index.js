import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
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
            <DeliveryAddressContainer>
                <h4>Delivery Address</h4>
                <div className="shipping-address-selector">
                    <ul style={{
                            display: 'flex',
                            /* max-width: 400px; */
                            overflowX: 'scroll',
                            marginRight: '5px',
                            paddingBottom: '10px'
                    }}>{initialValues.shipping.map((address,idx) => (
                        <AddressBox key={idx} selected={idx === 0 ? 1 : 0}>
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
                        </AddressBox>
                    ))}</ul>
                    <div className="more-address">
                        <div
                            className="add-address-btn"
                            onClick={() => toggleDeliveryForm(true)}>+
                        </div>
                    </div>
                </div>
                {isDeliveryFormOpen && 
                <Modal
                    id="modal"
                    isOpen={isDeliveryFormOpen}
                    onClose={toggleDeliveryForm}
                    header="Delivery Address"
                >
                    <ShippingAddressForm onSubmit={setDeliveryFormData} />
                </Modal>}
            </DeliveryAddressContainer>
    )
}

export default DeliveryAddress