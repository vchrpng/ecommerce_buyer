import React from 'react'
import { Flex } from '../../theme/Grid'
import { List , Item , CustomLink } from './Nav.style'

const Nav = () => {
    return(
        <Flex justify={'center'} align={'center'}>
        <List>
                <Item><CustomLink to="/shop">Shop</CustomLink></Item>
                <Item><CustomLink to="/">Home</CustomLink></Item>
                <Item><CustomLink to="/contact">Contact</CustomLink></Item>
                <Item><CustomLink to="/about">About</CustomLink></Item>
                <Item><CustomLink to="/shoppingbag">shopping bag</CustomLink></Item> 
        </List>
        </Flex>
    )
}

export default Nav