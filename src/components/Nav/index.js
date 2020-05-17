import React from 'react'
import { List, Item } from './styled'
import { CustomLink } from '../Etc/Reusable'
import ShoppingBag from '../../containers/ShoppingBag'
import { Image  , Label, Popup } from 'semantic-ui-react'
import { selectedProducts } from '../../selectors'
import { connect } from 'react-redux'
import shoppingbag from '../../shopping-bag.svg'
import user from '../../avatar.svg'
import { compose , withState , withHandlers } from 'recompose'



const Nav = ({ products }) => (

            <List>
            <Item style={{width:'86%',textAlign:'-webkit-center'}}>
                <Image
                    href="/" 
                    src="https://res.cloudinary.com/josphr/image/upload/v1579416257/products/logo.png" />
            </Item>
            <Item>
                <CustomLink color={'black'} to="/account/login">
                    <Image src={user}/>
                    <Label style={{visibility:'hidden'}}/>
                </CustomLink>
            </Item>
            <Popup pinned hoverable position="bottom center" trigger={
                <Item>
                    <Image src={shoppingbag}/>
                    <Label circular size={'tiny'} color={'red'}
                    style={{
                        position:'relative',
                        top:'-30px',left:'13px'
                    }}> {products.length}  </Label>
            </Item>
            }>
                <ShoppingBag />
            </Popup>
            
        </List>
    )

const mapStateToProps = state => ({
    products : selectedProducts(state)
})

export default compose(
    connect(mapStateToProps),
    withState('isVisible','toggleHandler',false),
    withHandlers({
        toggleVisibility : ({ toggleHandler , isVisible }) => () => toggleHandler(!isVisible)
    })
)(Nav)