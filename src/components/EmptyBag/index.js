import React from 'react'
import { DisplayGrid , Flex } from '../../theme/Grid'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { CustomLink } from '../Etc/CustomLink'
import { Icon } from 'semantic-ui-react'

const EmptyBag = () => {
    return (
        <DisplayGrid style={{marginTop:'100px'}}  autoRows={'70px,auto'}>
            <Flex justify={'center'} align={'center'} style={{marginBottom:'50px'}}>
                <Icon color="grey" size="massive" name="shopping bag"/>
            </Flex>
            <Flex justify={'center'} align={'center'}>
            <h4 style={{fontWeight:'100',letterSpacing:'2px'}}>YOUR BAG IS EMPTY PLEASE GO TO SHOPPING.</h4></Flex>
            <Flex justify={'center'} align={'center'}>
            <CustomLink style={{width:'65%'}} to='/shop'>  
                <ButtonStyled>
                    
                        GO SHOPPING
                  
                </ButtonStyled>
                </CustomLink>
            </Flex>
        </DisplayGrid>
    )
}

export default EmptyBag