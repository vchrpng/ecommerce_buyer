import React from 'react';
import PropTypes from 'prop-types'
import SizePickup from '../SizePickup'
import { Header , Grid } from 'semantic-ui-react'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { Loader } from 'semantic-ui-react'


class ShippingDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : false
        }
        this.Loader = this.Loader.bind(this)
    }

    Loader(){
        this.setState({
            isLoading : !this.state.isLoading
        })
        setTimeout(() => this.setState({
            isLoading : !this.state.isLoading
        }),2000)
    }

    render(){
    return (
        <Grid style={{padding:'80px'}} container textAlign="center">
            <Grid.Row ><Header size="medium">{this.props.children}</Header></Grid.Row >
            <Grid.Row ><p>Taxes and duties included.<br/>
                Free shipping on orders over $500</p></Grid.Row >
            <Grid.Row>
                <SizePickup/>
            </Grid.Row>
            <Grid.Row>
                {this.state.isLoading ? 
                <ButtonStyled><Loader active inline size='small' inverted/></ButtonStyled>:
                <ButtonStyled onClick={this.Loader}>
                ADD TO BAG
            </ButtonStyled>
            }
               
            </Grid.Row>
        </Grid>

    )
    }
}

ShippingDetail.PropTypes = {
    onAddToBag : PropTypes.func.isRequired
}


export default ShippingDetail