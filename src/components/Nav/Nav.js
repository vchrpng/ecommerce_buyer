import React from 'react'

import { List , ListItem , CustomLink } from './Nav.style'

const Nav = () => {
    return(
        <List>
                <ListItem><CustomLink to="/shop">Shop</CustomLink></ListItem>
                <ListItem><CustomLink to="/shoppingbag">shopping bag</CustomLink></ListItem>  
                <ListItem><CustomLink to="/">Home</CustomLink></ListItem>
                <ListItem><CustomLink to="/contact">Contact</CustomLink></ListItem>
                <ListItem><CustomLink to="/about">About</CustomLink></ListItem>
        </List>
    )
}

export default Nav