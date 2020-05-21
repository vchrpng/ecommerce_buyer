import React from 'react'
import { CustomLink } from '../Etc/Reusable'
import { Icon } from 'semantic-ui-react'

const CheckoutNavigate = () => (
   
        <div style={{display:'flex',alignItems:'center',width:'60%'}}>
            <div>
            <Icon name={'chevron left'}/> 
            <CustomLink 
                to="/"
                color={'black'}> 
            Back to shopping bag 
            </CustomLink>
            </div>
        </div>
)

export default CheckoutNavigate
