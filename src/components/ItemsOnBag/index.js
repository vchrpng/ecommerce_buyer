import React from 'react'
import { deleteFromBag } from '../../actions'
import { Button , Item , Grid , Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'


const ItemsOnBag = ({ product , deleteFromBag }) => {
    const renderLists = product.map((item,idx) =>
        <Item key={idx}>
            <Item.Image 
                size="tiny" 
                src={item.img}/>
            <Item.Content>
               
                <Item.Meta>
                    <span>{item.title}</span><br/>
                    <span>{item.price} $</span>
                </Item.Meta>
                <Item.Extra>
                    
                        <Icon onClick={() => deleteFromBag(idx)} name='x' />
                    </Item.Extra>
            </Item.Content>
            
        </Item>
    )

    return (
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    Shopping Bag
                    <Item.Group divided>
                        {renderLists}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => ({
    
})

export default connect(mapStateToProps,{deleteFromBag})(ItemsOnBag)