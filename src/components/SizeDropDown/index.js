import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { checkInventory } from '../../helpers/util'


class SizeDropDown extends React.Component {  
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.props.valueOnChange(e.target.value)
  }
  
  render(){
    // const hasSizeSmall = checkInventory(this.props.inventory.S)
    // const hasSizeMedium = checkInventory(this.props.inventory.M)
    // const hasSizeLarge = checkInventory(this.props.inventory.L)
    // const hasSizeExtra = checkInventory(this.props.inventory.XL)

    const checkAvailable = (item) => {
      if(!item){
          return ''
      }else{
          return ' :  Out of Stock'
      }
    }

    // const stateOptions = [
    //   { key : 'S',  value: 'S',   text: `S  ${checkAvailable(hasSizeSmall)}` , disabled : hasSizeSmall },
    //   { key : 'M',  value: 'M',   text: `M  ${checkAvailable(hasSizeMedium)}` , disabled : hasSizeMedium },
    //   { key : 'L',  value: 'L',   text: `L  ${checkAvailable(hasSizeLarge)}` , disabled : hasSizeLarge },
    //   { key : 'XL', value: 'XL',  text: `XL  ${checkAvailable(hasSizeExtra)}` ,disabled : hasSizeExtra },
    // ]

    const stateOptions = [
      { key : 'S',  value: 'S',   text: 'S' },
        { key : 'M',  value: 'M',   text:'M' },
        { key : 'L',  value: 'L',   text: 'L' },
        { key : 'XL', value: 'XL',  text: 'XL' }
    ]

      return ( 
        <Dropdown
              style={{fontSize:'12px',
                height:'35px',
                paddingTop:'11px',
                borderColor:'#333',
                borderRadius:'0'
              }}
              onChange={this.props.valueOnChange}
              placeholder={'SELECT YOUR SIZE'} 
              fluid selection
              options={stateOptions} />
    )
  }
}



export default SizeDropDown