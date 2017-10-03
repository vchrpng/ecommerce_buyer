import React from 'react'
import { Field , reduxForm} from 'redux-form'
import SizeDropDown from '../SizeDropDown/SizeDropDown'
import Button from '../Etc/Button'


const SizePickup = () => {
    return (
        <div>
           <Field name="sizeSelector" component={SizeDropDown}/>
            <Button>
                ADD TO BAG
            </Button>
        </div>
    )
}

export default reduxForm({ form : 'sizeSelector' })(SizePickup)