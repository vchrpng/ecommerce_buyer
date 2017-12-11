import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import { CustomLink } from '../Etc/Reusable'


const CheckoutHeader = () => (
    <div>
        <h1 style={{textAlign:'center',marginTop:'35px'}}> LOGO </h1>
        <Breadcrumb style={{fontSize:'smaller'}}>
        <CustomLink to='/shoppingbag'>  
            <Breadcrumb.Section>
            <label style={{color:'black'}}>  Shopping Bag </label>
            </Breadcrumb.Section>
            </CustomLink>
            <Breadcrumb.Divider icon='right angle'/>
            <Breadcrumb.Section>
            <strong> Checkout </strong>
            </Breadcrumb.Section>
        </Breadcrumb>
    </div>
)

export default CheckoutHeader