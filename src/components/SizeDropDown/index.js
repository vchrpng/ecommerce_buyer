import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { checkItem } from '../../helpers/util'


class SizeDropDown extends React.Component {  
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.props.valueOnChange(e.target.value)
  }
  
  render(){
    
    const hasSizeSmall = checkItem(this.props.inventory.s)
    const hasSizeMedium = checkItem(this.props.inventory.m)
    const hasSizeLarge = checkItem(this.props.inventory.l)
    const hasSizeExtra = checkItem(this.props.inventory.xl)


    const stateOptions = [
      { key : 'S',  value: 'S',   text: 'S' , disabled : hasSizeSmall },
      { key : 'M',  value: 'M',   text: 'M' , disabled : hasSizeMedium },
      { key : 'L',  value: 'L',   text: 'L' , disabled : hasSizeLarge },
      { key : 'XL', value: 'XL',  text: 'XL' ,disabled : hasSizeExtra },
    ]



      return ( 
        <Dropdown
              onChange={this.props.valueOnChange}
              placeholder={'Please pick your size'} 
              fluid 
              options={stateOptions} />
    )
  }
}



export default SizeDropDown