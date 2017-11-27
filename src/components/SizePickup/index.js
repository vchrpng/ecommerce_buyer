import React from 'react'
import { Field , reduxForm} from 'redux-form'
import SizeDropDown from '../SizeDropDown'
import { Container } from 'semantic-ui-react'

const SizePickup = ({inventory}) => {
    return (
        <Container >
           <Field
            name="sizePickup" 
            component={SizeDropDown}
            inventory={inventory}/>
        </Container>
    )
}



export default reduxForm({ form : 'sizePickup'})(SizePickup)