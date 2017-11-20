import React from 'react'
import { DisplayGrid , Flex } from '../../theme/Grid'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { CustomLink } from '../Etc/CustomLink'


const EmptyBag = () => {
    return (
        <DisplayGrid 
            style={{marginTop:'100px'}}  
            autoRows={'70px,auto'}
            >
            <Flex justify={'center'} align={'center'}>
                <h4 style={{fontWeight:'100',letterSpacing:'1px'}}>
                    Your bag is empty please go to shopping.
                </h4></Flex>
            <Flex justify={'center'} align={'center'}>
            <CustomLink style={{width:'65%'}} to='/'>  
                <ButtonStyled>
                    
                        GO SHOPPING
                  
                </ButtonStyled>
                </CustomLink>
            </Flex>
        </DisplayGrid>
    )
}

export default EmptyBag