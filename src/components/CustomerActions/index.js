import React from 'react';
import PropTypes from 'prop-types'
import SizeDropDown from '../SizeDropDown'
import { ButtonStyled } from '../Etc/Reusable'
import { Loader } from 'semantic-ui-react'
import { addToBag } from '../../actions'
import { connect } from 'react-redux'


const CustomerActionsWrapper = styled.div`
    margin-top:20px;

`

class CustomerActions extends React.Component {
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
            <CustomerActionsWrapper>
                <SizeDropDown
                    inventory={inventoryByIndex.inventory}
                    valueOnChange={this.handleOnChange}
                />
                <div style={{paddingTop:'5px'}}>
                    {this.state.isLoading ? 
                    <ButtonStyled height={'40px'}>
                        <Loader active inline size='small' inverted/>
                    </ButtonStyled> :
                    <ButtonStyled height={'40px'} onClick={this.handleAddToBagDelay} >
                        ADD TO BAG
                    </ButtonStyled>
                }
                </div>
            </CustomerActionsWrapper>
        )
    }
}

CustomerActions.PropTypes = {
    onAddToBag : PropTypes.func.isRequired
}


export default connect(null,{ addToBag })(CustomerActions)