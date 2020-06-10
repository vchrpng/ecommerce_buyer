import React from 'react'
import { CustomLink } from '../Etc/Reusable'
import { Icon } from 'semantic-ui-react'

const CheckoutNavigate = () => (
   
        <div style={{display:'flex',alignItems:'center',width:'60%'}}>
            <div>
            <Icon name={'chevron left'} color="grey" /> 
            <CustomLink 
                to="/"
                color={'rgb(0,0,0,0.5)'}> 
                Back
            </CustomLink>
            </div>
        </div>
)

export default CheckoutNavigate
