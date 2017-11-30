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

    const soldout = (item) => {
      if(!item){
          return ''
      }else{
          return ' Sold Out'
      }
    }

    const stateOptions = [
      { key : 'S',  value: 'S',   text: `S  ${soldout(hasSizeSmall)}` , disabled : hasSizeSmall },
      { key : 'M',  value: 'M',   text: `M  ${soldout(hasSizeMedium)}` , disabled : hasSizeMedium },
      { key : 'L',  value: 'L',   text: `L  ${soldout(hasSizeLarge)}` , disabled : hasSizeLarge },
      { key : 'XL', value: 'XL',  text: `XL  ${soldout(hasSizeExtra)}` ,disabled : hasSizeExtra },
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