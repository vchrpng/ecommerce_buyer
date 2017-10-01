import React from 'react'
import { List , Item } from './CategoryList.style'
import category from '../../constants/Category'

const CategoryList = () => {
    

    return (
        <List>
            {category.map(i => 
                <Item key={i}>{i}</Item>
            )}
        </List>
    )
}


export default CategoryList