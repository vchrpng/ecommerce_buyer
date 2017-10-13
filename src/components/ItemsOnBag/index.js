import React from 'react'
import { deleteFromBag } from '../../actions'
import {  Item , Grid , Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getTotal } from '../../reducers'


const ItemsOnBag = ({ product , deleteFromBag , total }) => {
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
    const shippingCost = (total > 500 ? 0 : 200).toFixed(2)
    const orderTotal = parseFloat(total) + parseInt(shippingCost)
   

    return (
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                  <div>  Shopping Bag </div>
                    <Item.Group divided>
                        {renderLists}
                    </Item.Group>
                    <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column> Total</Grid.Column>
                        <Grid.Column>{total}$</Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>Shipping Estimate</Grid.Column>
                        <Grid.Column>{shippingCost}$</Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>Duties and Taxes</Grid.Column>
                        <Grid.Column>included</Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>Order Total</Grid.Column>
                        <Grid.Column>{orderTotal.toFixed(2)}$</Grid.Column>
                    </Grid.Row>
                    </Grid> 
                </Grid.Column>
                <Grid.Column>
                    register
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => ({
    total : getTotal(state)
})

export default connect(mapStateToProps,{deleteFromBag})(ItemsOnBag)