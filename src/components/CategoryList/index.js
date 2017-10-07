import React from 'react'
import { List , Item , NewaArrival } from './styled'
import category from '../../constants/Category'
import { CustomLink } from '../Etc/CustomLink'

const CategoryList = () => {

    return (
       
        <List>
            <NewaArrival>New Arrival</NewaArrival>
            {category.map(i => 
                <CustomLink key={i} to={`/products/${i}`}>
                <Item >{i}</Item>
                </CustomLink>
            )}
        </List>
      
    )
}


export default CategoryList