import React from 'react';
import PropTypes from 'prop-types'
import SizeDropDown from '../SizeDropDown'
import { Grid , Transition , Icon } from 'semantic-ui-react'
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
            showRequired : false ,
            text : ''

        }
        this.handleAddToBagDelay = this.handleAddToBagDelay.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.addToWishlist = this.addToWishlist.bind(this)
    }

    handleAddToBagDelay = () => {
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
                showRequired : !this.state.showRequired,
                text : 'Please select your size'
            })
            setTimeout(() => this.setState({
                showRequired : !this.state.showRequired
            }),1000)
        } 
    }

    addToWishlist = () => {
        this.setState({
            showRequired : !this.state.showRequired,
            text : 'Please login first'
        })
        setTimeout(() => this.setState({
            showRequired : !this.state.showRequired
        }),1000)
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
                        <p>{this.state.text}</p>
                    </MessageBox>
                </div>
                </Transition>
                
                <Grid.Row >
                    <p style={{fontSize:'18px'}}>{this.props.children}</p>
                </Grid.Row >
                <Grid.Row >
                    <p style={{fontWeight:'lighter',fontSize:'12px'}}>Taxes and duties included.<br/>
                    Free shipping on orders over $500</p>
                </Grid.Row >
                <Grid.Row>
                    <SizeDropDown
                        inventory={this.props.inventory}
                        valueOnChange={this.handleOnChange}
                    />
                </Grid.Row>
                <Grid.Row style={{paddingTop:'5px'}}>
                    {this.state.isLoading ? 
                    <ButtonStyled height={'35px'}>
                        <Loader active inline size='small' inverted/>
                    </ButtonStyled> :
                    <ButtonStyled height={'35px'} onClick={this.handleAddToBagDelay} >
                        ADD TO BAG
                    </ButtonStyled>
                }
                
                </Grid.Row>
                <div style={{paddingLeft:'0'}}>
                    <Icon 
                        onClick={this.addToWishlist}
                        style={{cursor:'pointer'}} 
                        name={'heart outline'}
                    />
                      <span style={{fontSize:'10px',marginLeft:'10px',fontWeight:'bold'}}>
                        ADD TO WISHLIST
                      </span>
                </div>
            </Grid>
    
        )
    }
}

ShippingDetail.PropTypes = {
    onAddToBag : PropTypes.func.isRequired
}


export default connect(null,{ addToBag })(ShippingDetail)