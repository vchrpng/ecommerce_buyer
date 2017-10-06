import React from 'react'
import { DisplayGrid , Flex } from '../../theme/Grid'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { CustomLink } from '../Etc/CustomLink'

const EmptyBag = () => {
    return (
        <DisplayGrid  autoRows={'70px,auto'}>
            <Flex justify={'center'} align={'center'}>Your bag is empty please go to shopping</Flex>
            <Flex justify={'center'} align={'center'}>
                <ButtonStyled>
                    <CustomLink color={'white'} hoverColor={'black'} to='/shop'>
                        GO SHOPPING
                    </CustomLink>
                </ButtonStyled>
            </Flex>
        </DisplayGrid>
    )
}

export default EmptyBag