import React from 'react'
import { Field , reduxForm} from 'redux-form'
import SizeDropDown from '../SizeDropDown/SizeDropDown'
import Button from '../Etc/Button'



const SizePickup = ({ addToBagClicked }) => {
    return (
        <div>
           <Field
            name="sizePickup" 
            component={SizeDropDown}/>
            <Button onClick={addToBagClicked}>
                ADD TO BAG
            </Button>
        </div>
    )
}

export default reduxForm({ form : 'sizePickup' })(SizePickup)