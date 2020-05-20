import React from 'react';
import PropTypes from 'prop-types'
import SizeDropDown from '../SizeDropDown'
import { Grid , Icon } from 'semantic-ui-react'
import { ButtonStyled } from '../Etc/Reusable'
import { Loader } from 'semantic-ui-react'
import { addToBag } from '../../actions'
import { connect } from 'react-redux'
import { MessageBox , FadeMessage } from '../Etc/RequiredMsg'

class ShippingDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : false ,
            size : null ,
            showRequired : false,
            text : '',
            index : this.props.inventory.findIndex(el => el.id === this.props.currentProduct.id)          
        }
    }

    handleAddToBagDelay = () => {
        if(this.state.size){
             if(this.props.inventory[this.state.index].inventory[this.state.size] > 0){
            this.setState({
                isLoading : !this.state.isLoading
            })
           
            setTimeout(() => this.setState({
                isLoading : !this.state.isLoading
            }),1000)
            
                this.props.addToBag(this.props.currentProduct.id,this.state.size)
            }
        }
        else {
            this.setState({
                showRequired : !this.state.showRequired,
                text : 'Please select your size'
            })
            setTimeout(() => this.setState({
                showRequired : !this.state.showRequired,
            }),1000)
        } 
    }

    addToWishlist = () => {
        this.setState({
            showRequired : !this.state.showRequired,
            text : 'Please login first'
        })
        setTimeout(() => this.setState({
            showRequired : !this.state.showRequired,
        }),1000)
    }

    handleOnChange = (e,data) => {
        this.setState({
            size : data.value
        })
    }
  
render(){
    // console.log(this.props.inventory[this.state.index].inventory[this.state.size])
    const inventoryByIndex = this.props.inventory[this.state.index]

    return (
     
            <Grid container textAlign="center">
          
                <Grid.Row >
                    <p style={{fontSize:'18px'}}>{this.props.children}</p>
                </Grid.Row >
                <Grid.Row>
                    <SizeDropDown
                        inventory={inventoryByIndex.inventory}
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