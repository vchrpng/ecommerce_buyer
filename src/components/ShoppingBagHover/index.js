import React from 'react';
import EmptyBagHover from '../EmptyBagHover'
import ItemsOnBagHover from '../ItemsOnBagHover'

const ShoppingBagHover = ({ products }) => {
    if(products.length)
        return (<ItemsOnBagHover/>)
    else
        return (<EmptyBagHover/>)
}

export default ShoppingBagHover