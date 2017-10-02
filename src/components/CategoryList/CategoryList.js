import React from 'react'
import { List , Item } from './CategoryList.style'
import category from '../../constants/Category'
import { CustomLink } from '../Etc/CustomLink'

const CategoryList = () => {

    return (
       
        <List>
            {category.map(i => 
                <CustomLink key={i} to={`/products/${i}`}>
                <Item >{i}</Item>
                </CustomLink>
            )}
        </List>
      
    )
}


export default CategoryList