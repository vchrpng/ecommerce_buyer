import React from 'react'
import { List, Item } from './styled'
import { CustomLink } from '../Etc/Reusable'
import { Image , Icon , Label } from 'semantic-ui-react'
import { selectedProducts } from '../../selectors'
import { connect } from 'react-redux'
import shoppingbag from '../../shopping-bag.svg'
import user from '../../avatar.svg'
import { compose , withState , withHandlers } from 'recompose'



const Nav = ({ products , toggleVisibility , isVisible }) => (

            <List>
                <Item style={{width:'5%'}}>
                <Icon
                    style={{cursor:'pointer'}}
                    size={'large'} 
                    name='search' 
                    onClick={toggleVisibility}
                />
            </Item>
            <Item style={{width:'86%',textAlign:'-webkit-center'}}>
                <Image
                    href="/" 
                    src="http://www.sneakavilla.net/wp-content/uploads/2015/12/smalllogo-font-header6.png" />
            </Item>
            <Item>
                <CustomLink color={'black'} to="/account/login">
                    <Image src={user}/>
                    <Label style={{visibility:'hidden'}}/>
                </CustomLink>
            </Item>
            <Item>
                <CustomLink color={'black'} to="/shoppingbag">
                    <Image src={shoppingbag}/>
                    <Label circular size={'tiny'} color={'red'}
                    style={{
                        position:'relative',
                        top:'-30px',left:'13px'
                    }}> {products.length}  </Label>
                </CustomLink>
            </Item>
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