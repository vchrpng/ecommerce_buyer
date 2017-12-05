import React from 'react'
import { ButtonStyled , CustomLink } from '../Etc/Reusable'
import { Icon } from 'semantic-ui-react'

const CheckoutNavigate = () => (
    <div style={{display:'flex',margin:'0 -3px'}}>
        <div style={{width:'60%'}}>
        <Icon name={'chevron left'}/> 
        <CustomLink 
            to="/shoppingbag"
            color={'black'}> 
        Back to shopping bag 
        </CustomLink>
        </div>
        <div style={{width:'40%'}}>
        <CustomLink 
            to="/"
            color={'white'}>
        <ButtonStyled
            radius={'4px'}
            hoverColor={'#830d00'}
            color={'#b61200'} 
            fontSize={'12px'}
            height={'50px'}>
            CONFIRM ORDER</ButtonStyled>
        </CustomLink>
        </div>
    </div>
)

export default CheckoutNavigate
