import React from 'react'
import { Flex } from '../../theme/Grid'
import { List , Item  } from './styled'
import { CustomLink } from '../Etc/CustomLink'

const Nav = () => {
    return(
        <Flex justify={'center'} align={'center'}>
        <List>
                <Item><CustomLink color={'black'} to="/shop">Shop</CustomLink></Item>
                <Item><CustomLink color={'black'} to="/contact">Contact</CustomLink></Item>
                <Item><CustomLink color={'black'} to="/">Home</CustomLink></Item>
                <Item><CustomLink color={'black'} to="/about">About</CustomLink></Item>
                <Item><CustomLink color={'black'} to="/shoppingbag">shopping bag</CustomLink></Item> 
        </List>
        </Flex>
    )
}

export default Nav