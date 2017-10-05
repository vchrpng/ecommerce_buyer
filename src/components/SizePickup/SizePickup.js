import React from 'react'
import { Field , reduxForm} from 'redux-form'
import SizeDropDown from '../SizeDropDown/SizeDropDown'


const SizePickup = () => {
    return (
        <div>
           <Field
            name="sizePickup" 
            component={SizeDropDown}/>
        </div>
    )
}



export default reduxForm({ form : 'sizePickup'})(SizePickup)