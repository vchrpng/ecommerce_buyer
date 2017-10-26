import React from 'react'
import { List , Item } from './styled'
import category from '../../constants/Category'
import { CustomLink } from '../Etc/CustomLink'
import { Grid } from 'semantic-ui-react'

const CategoryList = () => {

    return (
       <Grid>
        <Grid.Row only={'computer'} centered >
            <List>
            {category.map(i => 
                <CustomLink key={i} to={`/products/${i}`}>
                <Item >{i}</Item>
                </CustomLink>
            )}
            </List>
        </Grid.Row>
      </Grid>
    )
}


export default CategoryList