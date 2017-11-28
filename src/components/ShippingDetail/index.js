import React from 'react';
import PropTypes from 'prop-types'
import SizeDropDown from '../SizeDropDown'
import { Header , Grid , Transition } from 'semantic-ui-react'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { Loader } from 'semantic-ui-react'
import { addToBag } from '../../actions'
import { connect } from 'react-redux'
import { MessageBox } from '../Etc/RequiredMsg'

class ShippingDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : false ,
            size : null ,
            showRequired : false

        }
        this.handleDelayAfterClicked = this.handleDelayAfterClicked.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleDelayAfterClicked = () => {
        if(this.state.size){
            this.setState({
                isLoading : !this.state.isLoading
            })
            setTimeout(() => this.setState({
                isLoading : !this.state.isLoading
            }),1000)
            this.props.addToBag(this.props.currentProduct.id,this.state.size)
        }
        else {
            this.setState({
                showRequired : !this.state.showRequired
            })
            setTimeout(() => this.setState({
                showRequired : !this.state.showRequired
            }),1000)
        } 
        
    }

    handleOnChange = (e,data) => {
        this.setState({
            size : data.value
        })
    }
  
render(){
    return (
     
            <Grid container textAlign="center">
                
                <Transition visible={this.state.showRequired} animation='fade' duration={500}>
                <div>
                    <MessageBox>
                        <p>Please select your size</p>
                    </MessageBox>
                </div>
                </Transition>
                
                <Grid.Row >
                    <Header size="medium">{this.props.children}</Header>
                </Grid.Row >
                <Grid.Row ><p>Taxes and duties included.<br/>
                    Free shipping on orders over $500</p></Grid.Row >
                <Grid.Row>
                    <SizeDropDown
                        inventory={this.props.inventory}
                        valueOnChange={this.handleOnChange}
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