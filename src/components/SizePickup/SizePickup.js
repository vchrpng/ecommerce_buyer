import React from 'react'
import { Field , reduxForm} from 'redux-form'
import SizeDropDown from '../SizeDropDown/SizeDropDown'
import { connect } from 'react-redux'
import { addToBag } from '../../actions'



const SizePickup = ({ currentProduct }) => {
    return (
        <div>
           <Field
            name="sizePickup" 
            component={SizeDropDown}/>
            <button onClick={()=>addToBag(currentProduct.id)}>
                ADD TO BAG
            </button>
        </div>
    )
}
const mapStateToProps = state => ({
   
})
const reduxFormConfig = reduxForm({ form : 'sizePickup'})(SizePickup)

export default connect(mapStateToProps)(reduxFormConfig)