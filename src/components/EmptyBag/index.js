import React from 'react'
import { DisplayGrid , Flex } from '../../theme/Grid'
import { ButtonStyled , CustomLink } from '../Etc/Reusable'


const EmptyBag = () => {
    return (
        <div style={{
            minWidth: '300px'
        }}>
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
        </div>
    )
}

export default EmptyBag