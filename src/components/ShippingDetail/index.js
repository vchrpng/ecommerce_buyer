import React from 'react';
import PropTypes from 'prop-types'
import SizeDropDown from '../SizeDropDown'
import { Header , Grid } from 'semantic-ui-react'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { Loader } from 'semantic-ui-react'
import { addToBag } from '../../actions'
import { connect } from 'react-redux'

class ShippingDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : false ,
            size : 's'

        }
        this.handleDelayAfterClicked = this.handleDelayAfterClicked.bind(this)
    }

    handleDelayAfterClicked(){
        this.setState({
            isLoading : !this.state.isLoading
        })
        setTimeout(() => this.setState({
            isLoading : !this.state.isLoading
        }),1000)
        this.props.addToBag(this.props.currentProduct.id,this.state.size)
    }

render(){
    return (
     
            <Grid container textAlign="center">
                <Grid.Row >
                    <Header size="medium">{this.props.children}</Header>
                </Grid.Row >
                <Grid.Row ><p>Taxes and duties included.<br/>
                    Free shipping on orders over $500</p></Grid.Row >
                <Grid.Row>
                    <SizeDropDown
                        inventory={this.props.inventory}
                    />
                </Grid.Row>
                <Grid.Row>
                    {this.state.isLoading ? 
                    <ButtonStyled>
                        <Loader active inline size='small' inverted/>
                    </ButtonStyled> :
                    <ButtonStyled onClick={this.handleDelayAfterClicked} >
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


export default connect(null,{ addToBag })(ShippingDetail)