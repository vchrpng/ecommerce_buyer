import React from 'react'
import { List , Item } from './CategoryList.style'
import category from '../../constants/Category'
import { CustomLink } from '../Etc/CustomLink'

const CategoryList = () => {

    return (
       
        <List>
            {category.map(i => 
                <CustomLink to={`/products/${i}`}>
                <Item key={i}>{i}</Item>
                </CustomLink>
            )}
        </List>
      
    )
}


export default CategoryList