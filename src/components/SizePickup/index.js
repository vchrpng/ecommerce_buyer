import React from 'react'
import { Field , reduxForm} from 'redux-form'
import SizeDropDown from '../SizeDropDown'
import { Container } from 'semantic-ui-react'

const SizePickup = () => {
    return (
        <Container >
           <Field
            name="sizePickup" 
            component={SizeDropDown}/>
        </Container>
    )
}



export default reduxForm({ form : 'sizePickup'})(SizePickup)