import React from 'react'
import { List, Item } from './styled'
import { CustomLink } from '../Etc/CustomLink'
import { Image , Icon , Label } from 'semantic-ui-react'
import { getBagProducts } from '../../reducers'
import { connect } from 'react-redux'
import shoppingbag from '../../shopping-bag.svg'


class Nav extends React.Component {
  
    render() {
        const { products } = this.props

        return (
                <List>
                    <Item style={{width:'5%'}}>
                        <Icon size={'large'} name='search'/>
                    </Item>
                   
                    <Item style={{width:'86%',textAlign:'-webkit-center'}}>
                        <CustomLink color={'black'} to="/">
                            <Image 
                                src="http://www.sneakavilla.net/wp-content/uploads/2015/12/smalllogo-font-header6.png" />
                        </CustomLink>
                    </Item>
                    <Item>
                    <CustomLink color={'black'} to="/account/login">
                        <Icon size={'big'} name='user outline'/>
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
    }
    
}
const mapStateToProps = state => ({
    products: getBagProducts(state)
})

export default connect(mapStateToProps)(Nav)