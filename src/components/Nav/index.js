import React from 'react'
import { List, Item } from './styled'
import { CustomLink } from '../Etc/CustomLink'
import { Image , Icon , Label } from 'semantic-ui-react'
import { getBagProducts } from '../../reducers'
import { connect } from 'react-redux'
import shoppingbag from '../../shopping-bag.svg'
import user from '../../avatar.svg'
import SearchBar from '../SearchBar'

class Nav extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            searchBarToggle : false 
        }
        this.toggleSearch = this.toggleSearch.bind(this)
    }

    toggleSearch = () => {
        this.setState({
            searchBarToggle : !this.state.searchBarToggle
        })
    }

  
    render() {
        const { products } = this.props
        const  toggleState = this.state.searchBarToggle

        return (
                <List>
                    <Item style={{width:'5%'}}>
                        <Icon
                            style={{cursor:'pointer'}}
                            size={'large'} 
                            name='search' 
                            onClick={this.toggleSearch}
                        />
                        {toggleState && <SearchBar open={toggleState}/>}
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
    }
    
}
const mapStateToProps = state => ({
    products: getBagProducts(state)
})

export default connect(mapStateToProps)(Nav)