import React from 'react'
import { List , Item } from './styled'
import category from '../../constants/Category'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterCategory } from '../../actions'

const CategoryList = ({ filterCategory }) => {

    return (
       <Grid>
        <Grid.Row only={'computer'} centered >
            <List>
            {category.map((i,idx) =>           
                <Item onClick={() => filterCategory(i)} key={idx}>{i}</Item>
            )}
            </List>
        </Grid.Row>
      </Grid>
    )
}


export default connect(null,{filterCategory})(CategoryList)