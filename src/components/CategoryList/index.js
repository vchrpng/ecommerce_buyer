import React from 'react'
import { List , Item } from './styled'
import category from '../../constants/Category'
import { Grid } from 'semantic-ui-react'

const CategoryList = () => {

    return (
       <Grid>
        <Grid.Row only={'computer'} centered >
            <List>
            {category.map((i,idx) =>           
                <Item key={idx}>{i}</Item>
            )}
            </List>
        </Grid.Row>
      </Grid>
    )
}


export default CategoryList