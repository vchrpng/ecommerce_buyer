import React from 'react'
import { Flex } from '../../theme/Grid'
import { List , ListItem , CustomLink } from './Nav.style'

const Nav = () => {
    return(
        <Flex justify={'center'} align={'center'}>
        <List>
                <ListItem><CustomLink to="/shop">Shop</CustomLink></ListItem>
                <ListItem><CustomLink to="/shoppingbag">shopping bag</CustomLink></ListItem>  
                <ListItem><CustomLink to="/">Home</CustomLink></ListItem>
                <ListItem><CustomLink to="/contact">Contact</CustomLink></ListItem>
                <ListItem><CustomLink to="/about">About</CustomLink></ListItem>
        </List>
        </Flex>
    )
}

export default Nav