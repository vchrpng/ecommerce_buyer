import React from 'react'
import { Flex } from '../../theme/Grid'
import { List, Item } from './styled'
import { CustomLink } from '../Etc/CustomLink'
import { Image } from 'semantic-ui-react'
import { getBagProducts } from '../../reducers'
import { connect } from 'react-redux'


class Nav extends React.Component {
  
    render() {
        const { products } = this.props

        return (
            <Flex justify={'center'} align={'center'}>
                <List>
                    <Item>
                        <CustomLink color={'black'} to="/shop">Shop</CustomLink>
                    </Item>
                    <Item>
                        <CustomLink color={'black'} to="/contact">Contact</CustomLink>
                    </Item>
                    <Item>
                        <CustomLink color={'black'} to="/">
                            <Image 
                                style={{ margin: '0 40px 0 40px' }}
                                src="http://www.sneakavilla.net/wp-content/uploads/2015/12/smalllogo-font-header6.png" />
                        </CustomLink>
                    </Item>
                    <Item>
                        <CustomLink color={'black'} to="/wishlist">Wishlist</CustomLink
                    ></Item>
                    <Item
                        onMouseEnter={this.handleMouseHover}
                        onMouseLeave={this.handleMouseHover}
                    >
                        <CustomLink color={'black'} to="/shoppingbag">
                            shopping bag [ {products.length} ]
                        </CustomLink></Item>
                </List>
            </Flex>
        )
    }
    
}
const mapStateToProps = state => ({
    products: getBagProducts(state)
})

export default connect(mapStateToProps)(Nav)